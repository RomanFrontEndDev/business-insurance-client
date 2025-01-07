<script lang="ts" setup>
import { reactive, computed } from '#imports';
import { sendQuestion } from '@/api/question';
import { internationalPhoneMask } from '@/constants/masks';
import Input from '@/components/ui/Input.vue';
import Textarea from '@/components/ui/Textarea.vue';
import Button from '@/components/ui/Button.vue';

const emit = defineEmits(['show-success-toast']);

const form = reactive({
    user_name:     '',
    user_phone:    '',
    user_question: ''
});

const isDisabled = computed(() => Object.values(form).every(val => val.trim() !== ''));

/**
 * Отчистить форму.
 */
const clear = () => {
    form.user_name = '';
    form.user_phone = '';
    form.user_question = '';
};

/**
 * Обработчик отправки данных на сервер.
 */
const submit = async () => {
    if (!isDisabled.value) return;

    try {
        const res = await sendQuestion(form.user_name, form.user_phone, form.user_question);

        if (res.status) {
            clear();

            emit('show-success-toast');
        }
    } catch (error: unknown) {
        console.warn(error);

        if (error instanceof Error) {
            console.warn(error.message);
        }
    }
};
</script>

<template>
    <form
        id="question"
        class="question-form"
        @submit.prevent="submit"
    >
        <h2 class="question-form__title">
            Задайте свой вопрос
        </h2>

        <Input
            v-model:model-value="form.user_name"
            name="user_name"
            placeholder="Имя"
            required
            classes="question-form__input"
        >
            <template #label>
                Ваше имя
            </template>
        </Input>

        <Input
            v-model:model-value="form.user_phone"
            name="user_phone"
            placeholder="+7"
            required
            classes="question-form__input"
            :maska="internationalPhoneMask"
            inputmode="tel"
        >
            <template #label>
                Номер телефона
            </template>
        </Input>

        <Textarea
            v-model:model-value="form.user_question"
            name="user_question"
            required
            classes="question-form__textarea"
            placeholder="Как заказать страховку?"
        >
            <template #label>
                Вопрос
            </template>
        </Textarea>

        <Button
            type="submit"
            class="question-form__btn-submit"
            :disabled="!isDisabled"
        >
            Отправить
        </Button>
    </form>
</template>

<style lang="scss">
.question-form {
    position: relative;
    width: 100%;
    max-width: 575px;
    margin: 0 auto 64px;
    padding: 0 24px;

    &__title {
        margin-bottom: 36px;
    }

    &__input {
        margin-bottom: 24px;
    }

    &__textarea {
        margin-bottom: 44px;
    }

    &__btn-submit {
        width: 100%;
    }
}
</style>
