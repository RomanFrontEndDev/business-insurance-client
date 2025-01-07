<script lang="ts" setup>
import Container from '@/components/ui/Container.vue';
import Button from '@/components/ui/Button.vue';
</script>

<template>
    <section
        id="hero"
        class="hero"
    >
        <Container class="hero__container">
            <h2 class="hero__title">
                Business

                <span class="hero__title--colors">
                    Insurance
                </span>
            </h2>

            <p class="hero__description">
                Надежное страхование для бизнеса
                и&nbsp;таможенной деятельности
            </p>

            <Button
                type="button"
                class="hero__btn-request"
            >
                Оставить заявку
            </Button>
        </Container>
    </section>
</template>

<style lang="scss">
.hero {
    position: relative;
    margin-bottom: 64px;
    padding: 130px 0 100px;
    background-color: var(--white-darker);
    overflow: hidden;

    @media (width >= 768px) {
        padding: 130px 0;
    }

    &__container {
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 0 24px;

        @media (width >= 768px) {
            flex-direction: row;
        }
    }

    &__title {
        display: flex;
        flex-direction: column;
        margin-bottom: 36px;
        font-size: 2.125rem;
        font-weight: var(--f-weight-bold);
        line-height: 3.5rem;
        text-transform: uppercase;
        color: var(--black-primary);

        &--colors {
            margin-left: 44px;
            color: var(--blue-primary);
        }

        @media (width >= 768px) {
            margin-bottom: 44px;
            font-size: 4.5rem;
            line-height: 6.75rem;
        }
    }

    &__description {
        width: 100%;
        max-width: 300px;
        margin-bottom: 36px;
        font-size: 0.875rem;
        font-weight: var(--f-weight-regular);
        line-height: 1.25rem;
        color: var(--gray);

        @media (width >= 768px) {
            margin-bottom: 44px;
            font-size: 1rem;
            line-height: 1.5rem;
        }
    }

    &__btn-request {
        width: 100%;
        max-width: 556px;
    }
}
</style>
