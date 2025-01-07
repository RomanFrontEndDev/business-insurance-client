<script lang="ts" setup>
import Container from '@/components/ui/Container.vue';
</script>

<template>
    <section
        id="about"
        class="about"
    >
        <Container class="about__container">
            <h2 class="about__title">
                О компании
            </h2>

            <p class="about__description">
                <b>Business-Insurance</b> - это группа страховых агентов которые предоставляют коммуникацию между Клиентами и&nbsp;Страховыми&nbsp;компаниями РК. <br><br>
                Мы работаем на качество и скоротечность выписки договоров, так же предоставляем консультацию и координацию между&nbsp;выгодными ценами, страховых компаний.
            </p>
        </Container>
    </section>
</template>

<style lang="scss">
.about {
    position: relative;
    margin-bottom: 64px;

    &__container {
        padding: 0 24px;
    }

    &__title {
        margin-bottom: 24px;
        font-size: 2.5rem;
        font-weight: var(--f-weight-semibold);
        line-height: 3.5rem;
        color: var(--black-primary);
    }

    &__description {
        font-size: 1rem;
        font-weight: var(--f-weight-regular);
        line-height: 1.5rem;
        color: var(--black-primary);

        b {
            color: var(--blue-primary);
        }

        @media (width >= 768px) {
            font-size: 1.25rem;
            line-height: 2rem;
        }
    }
}
</style>
