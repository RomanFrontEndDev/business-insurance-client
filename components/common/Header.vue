<script lang="ts" setup>
import {
    ref,
    computed,
    onMounted,
    onBeforeUnmount
} from '#imports';
import { checkOffset } from '@/helpers/scroll';
import { HeaderID } from '@/constants/header';
import Container from '@/components/ui/Container.vue';
import CloseButton from '@/components/ui/CloseButton.vue';
import Logo from '@/components/common/Logo.vue';
import ContactPhone from '@/components/common/ContactPhone.vue';

const isMenuActive = ref<boolean>(false);
const isOffsetScrolled = ref<boolean>(false);

const route = useRoute();

/**
 * Смещение скролла, при котором меняется состояние шапки в пикселях.
 *
 * @type {number}
 */
const scrollOffset = computed(() => route.meta.headerFilledScrollOffset as number || 84);

/**
 * Показать меню.
 */
const showMenu = () => isMenuActive.value = true;

/**
 * Скрыть меню.
 */
const hideMenu = () => isMenuActive.value = false;

/**
 * Обработчик отслеживания скрола.
 */
const handleScroll = () => {
    isOffsetScrolled.value = checkOffset(scrollOffset.value);
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <header
        :id="HeaderID"
        class="header"
        :class="{
            'header--scrolled': isOffsetScrolled
        }"
    >
        <Container class="mobile">
            <Logo class="mobile__logo" />

            <button
                type="button"
                class="mobile__btn-menu"
                @click="showMenu"
            >
                Меню
            </button>
        </Container>

        <nav
            class="menu"
            :class="{ 'menu--active': isMenuActive }"
        >
            <div class="menu-container">
                <slot />

                <div class="menu-header">
                    <Logo class="menu__logo" />

                    <CloseButton
                        @click="hideMenu"
                    />
                </div>

                <div class="menu-footer">
                    <ContactPhone />

                    <button
                        type="button"
                        class="menu__btn-request"
                    >
                        Оставить заявку
                    </button>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss">
.header {
    position: fixed;
    top: 0;
    width: 100%;
    min-width: 320px;
    background-color: transparent;
    transition: background-color 0.3s ease-in, box-shadow 0.3s ease-in;
    z-index: 10;

    &--scrolled {
        background-color: var(--white);
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
    }
}

.mobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 13px 24px;

    &__logo {
        width: 102px;
    }

    &__btn-menu {
        @include reset-button();

        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px 16px;
        font-size: 1rem;
        font-weight: var(--f-weight-regular);
        line-height: 1.5rem;
        border-radius: var(--radius-md);
        background-color: var(--blue-primary);
        color: var(--white);
        transition: background-color 0.3s ease;

        &:active {
            background-color: var(--blue-darker);
        }
    }

    @media (width >= 768px) {
        padding-left: 0;
        padding-right: 0;
    }

    @media (width >= 1200px) {
        display: none;
    }
}

.menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--white);
    transform: translateX(100%);
    transition: transform 0.3s ease-in;
    z-index: 2;
    overflow-y: auto;

    .menu-hero {
        order: 2;

        @media (width >= 1200px) {
            order: 1;
        }
    }

    &__logo {
        width: 102px;
    }

    &__btn-request {
        @include reset-button();

        position: relative;
        display: none;
        transition: background-color 0.3s ease;
        padding: 12px 16px;
        font-size: 1rem;
        font-weight: var(--f-weight-regular);
        line-height: 1.5rem;
        border-radius: var(--radius-lg);
        background-color: var(--blue-primary);
        color: var(--white);

        @media (width >= 1200px) {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &:active {
            background-color: var(--blue-darker);
        }
    }

    &--active {
        transform: translateX(0);
        transition-timing-function: ease-out;
    }

    @media (width >= 1200px) {
        position: relative;
        top: initial;
        left: initial;
        width: 100%;
        height: initial;
        padding: 0 24px;
        background-color: transparent;
        transition: none;
        transform: initial;
        z-index: auto;
        overflow-y: initial;
    }
}

.menu-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0 24px;

    @media (width >= 1200px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: initial;
        max-width: 1376px;
        margin: 0 auto;
        padding: 13px 0;
    }
}

.menu-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 13px 0;
    background-color: var(--white);
    order: 1;

    .close-btn {
        @media (width >= 1200px) {
            display: none;
        }
    }

    @media (width >= 1200px) {
        padding: 0;
        background-color: transparent;
        order: 2;
    }
}

.menu-footer {
    display: flex;
    align-items: center;
    gap: 24px;
    order: 3;
}
</style>
