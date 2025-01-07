<script lang="ts" setup>
import Icon from '@/components/ui/Icon.vue';
</script>

<template>
    <button
        type="button"
        class="close-btn"
    >
        <Icon name="icon-close" />
    </button>
</template>

<style lang="scss">
.close-btn {
    @include reset-button();

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: var(--radius-md);
    background-color: var(--white-darkest);
    color: var(--black-primary);
}
</style>
