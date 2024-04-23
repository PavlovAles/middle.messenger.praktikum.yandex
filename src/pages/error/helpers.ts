export const getErrorPageContext = (code: '404' | '500') => {
    if (code === '404') {
        return {
            code,
            text: 'Не туда попали',
        };
    }
    return {
        code,
        text: 'Мы уже фиксим',
    };
};
