import { api } from '@/helpers/api';
import type { QuestionDataType } from '@/type/Question';

/**
 * Метод отправляет данные на сервер.
 *
 * @param {string} user_name
 * @param {string} user_phone
 * @param {string} user_question
 */
export const sendQuestion = (user_name: string, user_phone: string, user_question: string) => api<QuestionDataType>('/question', {
    method: 'POST',
    body:   {
        user_name,
        user_phone,
        user_question
    },
});
