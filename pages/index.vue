<script lang="ts" setup>
import { ref } from '#imports';
import { createSeoMeta } from '@/helpers/seo';
import Toast from '@/components/ui/Toast.vue';
import ContactBlock from '@/components/common/ContactBlock.vue';
import QuestionForm from '@/components/common/QuestionForm.vue';
import Hero from '@/components/main/Hero.vue';
import Services from '@/components/main/Services.vue';
import About from '@/components/main/About.vue';

definePageMeta({ layout: 'default' });

const isSuccessToast = ref<boolean>(false);

useSeoMeta(
    createSeoMeta({
        title:       'Business-Insurance - это группа страховых агентов которые предоставляют коммуникацию между Клиентами и Страховыми компаниями РК.',
        description: 'Мы работаем на качество и скоротечность выписки договоров, так же предоставляем консультацию и координацию между выгодными ценами, страховых компаний.'
    })
);
</script>

<template>
    <div class="main">
        <Hero />

        <Services />

        <ContactBlock
            title="Ответим на все вопросы в Телеграм!"
            href="https://t.me/+77066909061"
        />

        <About />

        <ContactBlock
            title="Связаться с нами через Whatsapp"
            href="https://wa.me/77066909061"
        />

        <QuestionForm
            @show-success-toast="isSuccessToast = true"
        />

        <Toast
            :is-active="isSuccessToast"
            type="success"
            title="Данные отправленны!"
            description="Вопрос успешно отправлен! Мы свяжемся в ближайшее время."
            @close="isSuccessToast = false"
        />
    </div>
</template>

<style lang="scss">
.main {
    position: relative;
}
</style>
