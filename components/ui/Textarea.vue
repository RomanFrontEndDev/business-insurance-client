<script lang="ts" setup>
import { ref, watch } from '#imports';

const props = defineProps<{
    name: string;
    modelValue: string | number;
    classes?: string | string[];
}>();

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
    const target = e.target as HTMLTextAreaElement | null;

    if (target === null || target.value === result.value) {
        return;
    }

    updateValue(target.value);
};

/**
 * Хэндлинг вставки в инпут.
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
        class="ui-textarea"
        :class="classes"
    >
        <label
            v-if="$slots.label"
            :for="name"
            class="ui-textarea__label"
        >
            <slot name="label" />

            <span
                v-if="$attrs.required !== undefined"
                class="ui-textarea__required-sign"
            >
                *
            </span>
        </label>

        <label
            :for="name"
            class="ui-textarea__wrap"
        >
            <textarea
                v-bind="$attrs"
                :id="name"
                ref="textarea"
                :value="result"
                class="ui-textarea__field"
                @input="handleInput"
                @paste="handlePaste"
                @drop.prevent=""
            />
        </label>
    </div>
</template>

<style lang="scss">
.ui-textarea {
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
        color: var(--black-primary);
    }

    &__field {
        display: block;
        width: 100%;
        height: auto;
        min-height: 136px;
        padding: 16px;
        font-family: inherit;
        font-size: 1rem;
        font-weight: inherit;
        line-height: 1.5rem;
        border-radius: var(--radius-lg);
        border: 1px solid rgba(1, 3, 25, 0.2);
        background-color: var(--white);
        appearance: none;
        resize: none;

        &:placeholder-shown {
            text-overflow: ellipsis;
        }

        &:focus {
            border-color: var(--blue-primary);
            outline: none;
        }

        &::-ms-reveal,
        &::-ms-clear {
            display: none;
        }

        &::placeholder {
            color: var(--gray);
        }
    }
}
</style>
