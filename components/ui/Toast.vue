<script lang="ts" setup>
import {
    ref,
    computed,
    watch,
    onBeforeUnmount
} from '#imports';
import Icon from '@/components/ui/Icon.vue';

const props = defineProps<{
    isActive: boolean;
    type: 'info' | 'success',
    title: string;
    description: string;
}>();

const emit = defineEmits(['close']);

const timeout = ref<number | null>(null);

/**
 * Тип иконки взависимости от типо нотификации.
 */
const icon = computed(() => {
    let icon = 'icon-info';

    if (props.type === 'success') {
        icon = 'icon-success';
    }

    return icon;
});

/**
 * Закрыть нотификацию.
 */
const close = () => {
    if (timeout.value) {
        timeout.value = null;
    }

    emit('close');
};

watch(() => props.isActive, (next) => {
    if (next) {
        if (timeout.value) {
            timeout.value = null;
        }

        timeout.value = window.setTimeout(() => {
            close();
        }, 3000);
    }
});

onBeforeUnmount(() => {
    if (timeout.value) {
        timeout.value = null;
    };
});
</script>

<template>
    <div
        class="ui-toast"
        :class="{
            'ui-toast--active': isActive,
            'ui-toast--success': type === 'success'
        }"
    >
        <div class="ui-toast__icon">
            <Icon :name="icon" />
        </div>

        <button
            type="button"
            class="ui-toast__btn-close"
            @click="close"
        >
            <Icon name="icon-close" />
        </button>

        <div class="ui-toast__content">
            <h2 class="ui-toast__title">
                {{ title }}
            </h2>

            <p class="ui-toast__description">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<style lang="scss">
.ui-toast {
    position: fixed;
    top: 16px;
    right: 16px;
    display: flex;
    align-items: flex-start;
    gap: 8px;
    width: 100%;
    max-width: 308px;
    min-height: 116px;
    padding: 12px 16px;
    border-radius: var(--radius-lg);
    background-color: var(--payed-blue);
    transform: translateX(1000%);
    transition: transform 0.3s ease-in;
    color: var(--black-primary);
    z-index: 99;

    &__icon {
        display: flex;
        width: 24px;
        height: 24px;
    }

    &__title {
        margin-bottom: 8px;
        font-size: 1rem;
        font-weight: var(--f-weight-bold);
        line-height: 1.5rem;
        color: var(--black-primary);
    }

    &__description {
        font-size: 0.875rem;
        font-weight: var(--f-weight-regular);
        line-height: 1.25rem;
        color: var(--black-primary);
    }

    &__btn-close {
        @include reset-button();

        position: absolute;
        top: 8px;
        right: 8px;
        color: var(--gray);
    }

    &--success {
        background-color: var(--payed-green);
    }

    &--active {
        transform: translateX(0);
        transition-timing-function: ease-out;
    }
}
</style>
