<script lang="ts" setup>
import { ref, watch } from '#imports';
import { vMaska } from 'maska/vue';
import type { MaskOptions } from 'maska';

const props = withDefaults(defineProps<{
    name: string;
    type?: string;
    modelValue: string | number;
    classes?: string | string[];
    maska?: MaskOptions;
}>(), {
    type: 'text',
});

const emit = defineEmits(['update:modelValue']);

const result = ref<string>(String(props.modelValue));

/**
 * Обновление значения.
 *
 * @param {string} value
 */
const updateValue = (value: string) => {
    result.value = value;

    emit('update:modelValue', value);
};

/**
 * Обработка ввода.
 *
 * @param {Event} e
 */
const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement | null;

    if (target === null || target.value === result.value) {
        return;
    }

    updateValue(target.value);
};

/**
 * Хэдлинг вставки в инпут.
 *
 * @param {Event} e
 */
const handlePaste = (e: Event) => {
    setTimeout(() => {
        handleInput(e);
    }, 0);
};

watch(() => props.modelValue, (next) => { result.value = String(next); }, { immediate: true });
</script>

<template>
    <div
        class="ui-input"
        :class="classes"
    >
        <label
            v-if="$slots.label"
            :for="name"
            class="ui-input__label"
        >
            <slot name="label" />

            <span
                v-if="$attrs.required !== undefined"
                class="ui-input__required-sign"
            >
                *
            </span>
        </label>

        <label
            :for="name"
            class="ui-input__wrap"
        >
            <input
                v-bind="$attrs"
                :id="name"
                ref="input"
                v-maska="maska"
                :value="result"
                :type="type"
                class="ui-input__field"
                @input="handleInput"
                @paste="handlePaste"
                @drop.prevent
            >
        </label>
    </div>
</template>

<style lang="scss">
.ui-input {
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 100%;
    margin: 0;
    font-weight: inherit;

    &__label {
        display: inline-block;
        margin-bottom: 4px;
        font-size: 0.813rem;
        font-weight: var(--f-weight-regular);
        line-height: 1.25rem;
        color: var(--gray);
    }

    &__required-sign {
        color: var(--red);
    }

    &__wrap {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        border-radius: var(--radius-lg);
        border: 1px solid rgba(1, 3, 25, 0.2);
        background-color: var(--white);
        background-clip: padding-box;
        color: var(--black-primary);
        transition: border-color 0.3s ease;

        &:focus-within {
            border-color: var(--blue-primary);
            outline: none;
        }
    }

    &__field {
        display: block;
        width: 100%;
        height: 56px;
        padding: 16px 8px 16px 16px;
        font-family: inherit;
        font-size: 1rem;
        font-weight: inherit;
        line-height: 1.5rem;
        border: none;
        background-color: transparent;
        appearance: none;

        &[type="search"] {
            &,
            &::-webkit-search-decoration {
                appearance: none;
            }

            &::-webkit-search-decoration,
            &::-webkit-search-cancel-button,
            &::-webkit-search-results-button,
            &::-webkit-search-results-decoration {
                display: none;
            }
        }

        &::-ms-reveal,
        &::-ms-clear {
            display: none;
        }

        &:placeholder-shown {
            text-overflow: ellipsis;
        }

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: var(--gray);
        }
    }
}
</style>
