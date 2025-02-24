import type { ServicesItemType } from '@/type/Services';

/**
 * Храним массив услуг на сайте.
 *
 * @returns <Array<ServicesItemType>>
 */
export const services: ServicesItemType[] = [
    {
        id:          662885,
        title:       'ДГПО по договору',
        description: 'Защита от рисков, связанных с неосвоением авансовых средств.',
    },
    {
        id:          272576,
        title:       'Типовой ДГПО поставщика',
        description: 'Оформление обязательного страхования для поставщиков товаров или услуг.',
    },
    {
        id:          919375,
        title:       'ДСПО таможенного перевозчика',
        description: 'Покрытие рисков при осуществлении таможенной деятельности. Доступны формы 500 и 200.',
    },
    {
        id:          888624,
        title:       'Договор страхования',
        description: 'Договор страхования поставщика между ТОО',
    }
];
