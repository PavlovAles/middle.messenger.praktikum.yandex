const HTTP_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
} as const;

type HTTPMethod = keyof typeof HTTP_METHODS;

type Options = {
    method: HTTPMethod;
    data?: Record<string, unknown>;
    headers?: Record<string, string>;
    timeout?: number;
};

type OptionsWithoutMethod = Omit<Options, 'method'>;

type HTTPTransportMethod = (url: string, options: OptionsWithoutMethod) => Promise<XMLHttpRequest>;

export default class HTTPTransport {
    static queryStringify(data: Record<string, unknown>): string {
        return Object.keys(data).reduce((result, key, index) => {
            return `${result}${index > 0 ? '&' : ''}${key}=${data[key]}`;
        }, '?');
    }

    get: HTTPTransportMethod = (url, options = {}) => {
        return this.request(url, { ...options, method: HTTP_METHODS.GET }, options.timeout);
    };

    post: HTTPTransportMethod = (url, options = {}) => {
        return this.request(url, { ...options, method: HTTP_METHODS.POST }, options.timeout);
    };

    put: HTTPTransportMethod = (url, options = {}) => {
        return this.request(url, { ...options, method: HTTP_METHODS.PUT }, options.timeout);
    };

    delete: HTTPTransportMethod = (url, options = {}) => {
        return this.request(url, { ...options, method: HTTP_METHODS.DELETE }, options.timeout);
    };

    request(
        url: string,
        options: Options = { method: HTTP_METHODS.GET },
        timeout = 5000
    ): Promise<XMLHttpRequest> {
        const { data, method, headers } = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            let urlWithParams = url;
            if (method === HTTP_METHODS.GET && data) {
                urlWithParams = `${url}${HTTPTransport.queryStringify(data)}`;
            }

            xhr.open(method, urlWithParams);

            if (headers) {
                Object.keys(headers).forEach((key) => {
                    xhr.setRequestHeader(key, headers[key]);
                });
            }

            xhr.timeout = timeout;

            xhr.onload = () => {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (method === HTTP_METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(JSON.stringify(data));
            }
        });
    }
}
