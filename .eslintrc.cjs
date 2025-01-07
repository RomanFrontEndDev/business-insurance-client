module.exports = {
    root: true,
    env:  {
        browser: true,
        es2021:  true,
        node:    true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
        '@vue/typescript/recommended'
    ],
    plugins: [
        'import-newlines'
    ],
    parser:        'vue-eslint-parser',
    parserOptions: {
        parser:      '@typescript-eslint/parser',
        ecmaVersion: 2021,
    },
    rules: {
        'no-console':  process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'semi':        ['error', 'always'],
        'quotes':      ['error', 'single'],
        'key-spacing': [
            'error',
            {
                'align': 'value'
            }
        ],
        'vue/html-indent':                 ['error', 4],
        'vue/no-multiple-template-root':   0,
        'vue/multi-word-component-names':  0,
        'vue/no-v-html':                   0,
        'vue/no-reserved-component-names': 'warn',
        'import/no-unresolved':            0,
        'jsdoc/require-jsdoc':             0,
        'jsdoc/check-alignment':           0,
        'jsdoc/tag-lines':                 0,
        'jsdoc/require-returns':           0,
        'no-param-reassign':               ['error', {
            props: false,
        }],
        'no-shadow':                    'off',
        '@typescript-eslint/no-shadow': ['error'],
        'vue/no-v-model-argument':      'off',
        'import-newlines/enforce':      [
            'error',
            {
                items:     3,
                'max-len': 120,
            },
        ],
        'import/prefer-default-export':    0,
        // todo: подумать над оптимизацией отключения
        'no-magic-numbers':                0,
        'jsdoc/require-param-type':        0,
        'jsdoc/require-param-description': 0,
        'jsdoc/check-tag-names':           0,
    },
    overrides: [
        {
            files: [
                '**/*.{ts,tsx,vue}',
            ],
            rules: {
                'no-undef':             'off',
                'import/no-unresolved': 'off',
            },
        },
        {
            files: [
                '**/*.vue',
            ],
            rules: {
                'vue/multi-word-component-names': 'off',
            },
        },
    ],
    globals: {
        defineProps:  'readonly',
        defineEmits:  'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
    },
};
