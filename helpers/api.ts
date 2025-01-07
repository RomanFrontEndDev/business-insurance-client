/**
 * Создаем инстанс фетча.
 */
export const api = $fetch.create({
    baseURL: '/api',
    onRequest({ options }) {
        options.headers = {
            ...options.headers,
        };
    },
});
