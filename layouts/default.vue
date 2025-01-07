<script lang="ts" setup>
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';
import Menu from '@/components/menu/index';
</script>

<template>
    <div class="layout-default">
        <Header>
            <Menu.Hero />
        </Header>

        <main>
            <slot />
        </main>

        <Footer />
    </div>
</template>

<style lang="scss">
.layout-default {
    position: relative;
}
</style>
