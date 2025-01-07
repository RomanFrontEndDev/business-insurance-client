/**
 * Выполняет проверку текущего отступа с указанным значением.
 *
 * @param   {number} offset Значение отступа для проверки
 * @param   {HTMLElement} body   Родительский элемент
 * @returns {boolean}
 */
export const checkOffset = (offset: number, body: HTMLElement = document.body) => {
    return (body.style.top ? parseInt(body.style.top || '0') * -1 : window.scrollY) > offset;
};
