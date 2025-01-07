/**
 * Интернациональная маска для инпута с телефоном.
 */
export const internationalPhoneMask = {
    mask:   '+#',
    tokens: {
        '+': {
            pattern:  /\+/,
            optional: true,
        },
        '#': {
            pattern:  /[0-9]/,
            multiple: true,
        },
    },
};
