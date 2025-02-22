import { proxyRequest, getRequestURL } from 'h3';

/**
 * Проксируем запросы через ssr.
 */
export default defineEventHandler(async (event): Promise<unknown> => {
    const config = useRuntimeConfig();

    const reqURL = getRequestURL(event);

    return proxyRequest(event, `${config.apiBaseURL}${reqURL.pathname}${reqURL.search}`);
});
