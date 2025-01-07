<script lang="ts" setup>
import { computed, useAttrs } from '#imports';

defineProps<{
    type: string;
    disabled?: boolean;
    label?: string;
}>();

const $attrs = useAttrs();

/**
 * Тип компоненты.
 */
const component = computed(() => {
    let component = 'button';

    if ($attrs?.href) {
        component = 'a';
    }

    if ($attrs?.to) {
        component = 'to';
    }

    return component;
});
</script>

<template>
    <component
        v-bind="$attrs"
        :is="component"
        ref="button"
        :type="component === 'button' ? type : null"
        :disabled="disabled || undefined"
        class="ui-button"
        :class="{
            'ui-button--disabled': disabled
        }"
    >
        <slot name="default">
            {{ label }}
        </slot>
    </component>
</template>

<style lang="scss">
.ui-button {
    @include reset-button();

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: initial;
    height: 56px;
    padding: 0 16px;
    font-size: 1rem;
    font-weight: var(--f-weight-regular);
    line-height: 1.5rem;
    text-decoration: none;
    border-radius: var(--radius-lg);
    border: 1px solid transparent;
    background-color: var(--blue-primary);
    transition: background-color 0.3s ease;
    color: var(--white);

    &:active {
        background-color: var(--blue-darker);
    }

    &:disabled,
    &--disabled {
        user-select: none;
        pointer-events: none;
        opacity: 0.56;
    }
}
</style>
