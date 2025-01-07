<script lang="ts" setup>
import { menu } from '@/constants/menu';
import List from './List.vue';
</script>

<template>
    <div class="menu-hero">
        <List
            class="menu-hero-list"
            :menu="menu"
        />
    </div>
</template>

<style lang="scss">
.menu-hero {
    position: relative;
}

.menu-hero-list {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (width >= 1200px) {
        flex-direction: row;
    }
}
</style>
