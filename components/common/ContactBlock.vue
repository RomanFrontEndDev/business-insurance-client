<script lang="ts" setup>
import Container from '@/components/ui/Container.vue';
import Button from '@/components/ui/Button.vue';

defineProps<{
    title: string;
    href: string;
}>();
</script>

<template>
    <div class="contact-block">
        <Container class="contact-block__container">
            <h2 class="contact-block__title">
                {{ title }}
            </h2>

            <Button
                :href="href"
                type="button"
                target="_blank"
                class="contact-block__btn"
            >
                Написать
            </Button>
        </Container>
    </div>
</template>

<style lang="scss">
.contact-block {
    position: relative;
    margin-bottom: 64px;
    padding: 0 24px;

    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 36px;
        border-radius: var(--radius-lg);
        background-color: var(--white-darker);
    }

    &__title {
        margin-bottom: 24px;
        font-size: 1rem;
        font-weight: var(--f-weight-semibold);
        line-height: 1.5rem;
        color: var(--black-primary);

        @media (width >= 768px) {
            font-size: 1.25rem;
            line-height: 2rem;
        }

        @media (width >= 1024px) {
            font-size: 1.5rem;
            line-height: 2.25rem;
        }

        @media (width >= 1200px) {
            margin-bottom: 0;
        }
    }

    &__btn {
        width: 100%;
        max-width: 420px;
    }
}
</style>
