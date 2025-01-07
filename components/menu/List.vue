<script lang="ts" setup>
import type { MenuItemType } from '@/type/Menu';

defineProps<{
    menu: MenuItemType[];
}>();
</script>

<template>
    <ul class="menu-list">
        <li
            v-for="item in menu"
            :key="item.id"
            class="menu-list__item"
        >
            <nuxt-link
                :to="item.link"
                class="menu-list__item-link"
            >
                {{ item.title }}
            </nuxt-link>
        </li>
    </ul>
</template>

<style lang="scss">
.menu-list {
    @include reset-list();

    &__item {
        position: relative;

        &-link {
            font-size: 0.875rem;
            font-weight: var(--f-weight-medium);
            line-height: 1.25rem;
            text-decoration: none;
            color: var(--black-primary);
            transition: color 0.3s ease;

            @media (width >= 1200px) {
                &:hover {
                    color: var(--blue-primary);
                }
            }
        }
    }
}
</style>
