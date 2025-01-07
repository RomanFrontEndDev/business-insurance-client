<script lang="ts" setup>
import type { ServicesItemType } from '@/type/Services';
import Icon from '@/components/ui/Icon.vue';
import Button from '@/components/ui/Button.vue';

defineProps<{
    services: ServicesItemType[];
}>();
</script>

<template>
    <ul class="services-list">
        <li
            v-for="service in services"
            :key="service.id"
            class="services-list__item"
        >
            <div class="services-list__header">
                <div class="services-list__icon">
                    <Icon name="icon-document" />
                </div>

                <h2 class="services-list__title">
                    {{ service.title }}
                </h2>
            </div>

            <p class="services-list__description">
                {{ service.description }}
            </p>

            <Button
                type="button"
                class="services-list__btn-more"
            >
                Получить рассчет
            </Button>
        </li>
    </ul>
</template>

<style lang="scss">
.services-list {
    @include reset-list();

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 1fr;
    gap: 24px;

    @media (width >= 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (width >= 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (width >= 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }

    &__item {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 342px;
        min-height: 300px;
        padding: 24px;
        border-radius: var(--radius-lg);
        background-color: var(--white-darker);
    }

    &__header {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 24px;
    }

    &__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        border-radius: var(--radius-md);
        background-color: var(--white);
        color: var(--blue-primary);
    }

    &__title {
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

    &__btn-more {
        margin-top: auto;
    }
}
</style>
