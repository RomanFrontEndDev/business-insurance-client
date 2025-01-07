<script lang="ts" setup>
import Icon from '@/components/ui/Icon.vue';
</script>

<template>
    <nuxt-link
        to="/"
        class="logo-link logo"
    >
        <Icon
            name="icon-logo"
            class="logo__icon"
        />
    </nuxt-link>
</template>

<style lang="scss">
.logo {
    display: flex;

    &__icon {
        width: 100%;
        max-width: 102px;
    }
}

.logo-link {
    text-decoration: none;
    color: var(--black-primary);
}
</style>
