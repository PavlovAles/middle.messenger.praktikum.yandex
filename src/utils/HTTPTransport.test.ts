import { expect } from 'chai';
import sinon, { SinonFakeXMLHttpRequestStatic, SinonFakeXMLHttpRequest } from 'sinon';
import HTTPTransport from './HTTPTransport';

export interface Global {
    XMLHttpRequest: SinonFakeXMLHttpRequestStatic;
}

describe('HTTPTransport', () => {
    let mockXhr: SinonFakeXMLHttpRequestStatic;
    let mockRequests: SinonFakeXMLHttpRequest[];

    beforeEach(() => {
        mockXhr = sinon.useFakeXMLHttpRequest();
        mockRequests = [];
        mockXhr.onCreate = (xhr) => {
            mockRequests.push(xhr);
        };
    });

    afterEach(() => {
        mockXhr.restore();
    });

    const transport = new HTTPTransport('testApiRoute');

    it('works with GET request', async () => {
        const data = { message: 'GET request success' };

        const request = transport.get('');
        mockRequests[0].respond(200, { 'Content-Type': 'application/json' }, JSON.stringify(data));

        const result = await (request as unknown as Promise<SinonFakeXMLHttpRequest>);
        expect(result.method).to.be.equal('GET');
    });

    it('works with GET request with query params', async () => {
        const responseData = { message: 'GET request success' };

        const request = transport.get('', { data: { a: '1', b: '2 2' } });
        mockRequests[0].respond(
            200,
            { 'Content-Type': 'application/json' },
            JSON.stringify(responseData)
        );

        const result = await (request as unknown as Promise<SinonFakeXMLHttpRequest>);
        expect(result.url).to.be.equal('a=1&b=2%202');
    });

    it('works with POST request', async () => {
        const requestData = { message: 'POST request' };
        const responseData = { message: 'POST request success' };

        const request = transport.post('', { data: requestData });
        mockRequests[0].respond(
            200,
            { 'Content-Type': 'application/json' },
            JSON.stringify(responseData)
        );

        const result = await (request as unknown as Promise<SinonFakeXMLHttpRequest>);
        expect(result.method).to.be.equal('POST');
        expect(result.requestBody).to.be.equal(JSON.stringify(requestData));
    });

    it('works with POST request with formData', async () => {
        const requestData = { data: 'POST request' };
        const responseData = { message: 'POST request success' };
        const formData = new FormData();
        formData.append('message', requestData.data);

        const request = transport.post('', { data: formData });
        mockRequests[0].respond(
            200,
            { 'Content-Type': 'application/json' },
            JSON.stringify(responseData)
        );

        const result = await (request as unknown as Promise<SinonFakeXMLHttpRequest>);
        expect(result.requestBody).to.be.an.instanceof(FormData);
    });

    it('works with DELETE request', async () => {
        const responseData = { message: 'DELETE request successful' };

        const request = transport.delete('', { data: { id: 1 } });
        mockRequests[0].respond(
            200,
            { 'Content-Type': 'application/json' },
            JSON.stringify(responseData)
        );

        const result = await (request as unknown as Promise<SinonFakeXMLHttpRequest>);
        expect(result.method).to.be.equal('DELETE');
    });

    it('works with PUT request', async () => {
        const requestData = { message: 'PUT request' };
        const responseData = { message: 'PUT request success' };

        const request = transport.put('', { data: requestData });
        mockRequests[0].respond(
            200,
            { 'Content-Type': 'application/json' },
            JSON.stringify(responseData)
        );

        const result = await (request as unknown as Promise<SinonFakeXMLHttpRequest>);
        expect(result.method).to.be.equal('PUT');
    });
});
