<script lang="ts" setup>
import { services } from '@/constants/services';
import Container from '@/components/ui/Container.vue';
import List from './services/List.vue';
</script>

<template>
    <section
        id="services"
        class="services"
    >
        <Container class="services__container">
            <h2 class="services__title">
                Наши услуги
            </h2>

            <List
                :services="services"
            />
        </Container>
    </section>
</template>

<style lang="scss">
.services {
    position: relative;
    margin-bottom: 64px;

    &__container {
        padding: 0 24px;
    }

    &__title {
        margin-bottom: 36px;
        font-size: 2.5rem;
        font-weight: var(--f-weight-semibold);
        line-height: 3.5rem;
        color: var(--black-primary);
    }
}
</style>
