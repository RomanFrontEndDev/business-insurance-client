import type { MenuItemType } from '@/type/Menu';

/**
 * Храним пункты основного меню.
 *
 * @returns <Array<MenuItemType>>
 */
export const menu: MenuItemType[] = [
    {
        id:    'hero',
        title: 'Главная',
        link:  '#hero'
    },
    {
        id:    'services',
        title: 'Наши услуги',
        link:  '#services'
    },
    {
        id:    'about',
        title: 'О нас',
        link:  '#about'
    },
    {
        id:    'question',
        title: 'Остались вопросы?',
        link:  '#question'
    }
];
