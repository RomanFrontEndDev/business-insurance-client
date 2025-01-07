<script lang="ts" setup>
import { phoneNumber, phoneNumberLink } from '@/constants/contacts';
</script>

<template>
    <a
        :href="phoneNumberLink"
        class="contact-phone"
        target="_blank"
    >
        {{ phoneNumber }}

        <span class="contact-phone__text">
            Быстрый звонок
        </span>
    </a>
</template>

<style lang="scss">
.contact-phone {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    font-weight: var(--f-weight-semibold);
    line-height: 1.5rem;
    text-decoration: none;
    color: var(--blue-primary);

    &__text {
        font-size: 0.875rem;
        font-weight: var(--f-weight-regular);
        line-height: 1.25rem;
        color: var(--gray);
    }

    @media (width >= 1200px) {
        align-items: flex-end;
    }
}
</style>
