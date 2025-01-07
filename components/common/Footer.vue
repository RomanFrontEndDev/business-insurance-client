<script lang="ts" setup>
import Container from '@/components/ui/Container.vue';
</script>

<template>
    <footer
        id="footer"
        class="footer"
    >
        <Container class="footer__container">
            <h2 class="footer__title">
                Business Insurance
            </h2>

            <p class="footer__text">
                2025 © Все права защищены.
            </p>
        </Container>
    </footer>
</template>

<style lang="scss">
.footer {
    position: relative;
    padding: 0 24px;
    background-color: var(--white-darker);

    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 16px;
        padding: 44px 0;
    }

    &__title {
        font-size: 1.25rem;
        font-weight: var(--f-weight-bold);
        line-height: 2.25rem;
        color: var(--black-primary);
    }

    &__text {
        display: flex;
        align-items: center;
        color: var(--black-primary);
    }
}
</style>
