<script setup>
import { shallowRef } from 'vue';
import { RouterLink } from 'vue-router';
import IconAngle from './icons/IconAngle.vue';
import IconExclamation from './icons/IconExclamation.vue';

const isSidebarOpen = shallowRef(false)

function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value;
}

</script>

<template>
    <aside :vue:is-open="isSidebarOpen">
        <ul class="sidebar-head">

            <router-link to="/"><img src="@/assets/logo.png" alt="logo" width="32" height="32"></router-link>

            <li>
                <button class="sidebar-toggle" :class="isSidebarOpen ? 'toggle-button' : ''">
                    <IconAngle @click="toggleSidebar" />
                </button>
            </li>
        </ul>


        <ul>
            <li>
                <router-link to="/dashboard">
                    <IconExclamation />
                    <Transition name="fade">
                        <span v-show="isSidebarOpen">Dashboard</span>
                    </Transition>
                </router-link>
            </li>

        </ul>
    </aside>
</template>

<style scoped lang="scss">
@use '@/assets/scss/colors' as clr;

$sidebar-width: 4rem;
$toggle-duration: 300ms;
$sidebar-padding-inline-start: 1rem;

aside {
    color: clr.$primary;
    background: clr.$bg-dark;
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding-block: 1rem;
    transition: all $toggle-duration;
    width: $sidebar-width;
    position: sticky;
    top: 0px;
}

aside[vue\:is-open=true] {
    width: 3 * $sidebar-width;
}

ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-block-end: 1rem;
    padding: 0;
}

img {
    object-fit: contain;
    padding: 0;
    min-width: fit-content;
    cursor: pointer;
    padding-inline-start: $sidebar-padding-inline-start;
}

li {
    padding: 0;
    min-width: fit-content;
    cursor: pointer;
    padding-inline-start: $sidebar-padding-inline-start;

    &:hover {
        color: clr.$secondary;
        background-color: lighten($color: clr.$bg-dark, $amount: 5);
    }

    & a {

        outline: none;
        display: flex;
        align-items: center;
        column-gap: 0.75rem;
        position: relative;
        padding-block: 0.5rem;
        text-decoration: none !important;
        color: inherit !important;
    }

    a.router-link-exact-active::after {
        content: '';
        position: absolute;
        right: 0;
        width: 0.25rem;
        height: 100%;
        background-color: clr.$secondary;
    }


}

.sidebar-head {
    position: relative;
    padding-block-end: 4rem;
}

.sidebar-toggle {
    padding-inline-start: $sidebar-padding-inline-start;
}

h4 {
    padding-block-end: 1rem;
    padding-inline-start: $sidebar-padding-inline-start;
    user-select: none;
    pointer-events: none;
    opacity: 0.5;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.125ch;
    transition: opacity $toggle-duration;
}

h4[transparent=true] {
    opacity: 0;
}

button {
    cursor: pointer;
    position: absolute;
    transition-duration: $toggle-duration;
    transition-property: transform, left, top;
    left: 0;
    top: 1rem;
    transform: translateX(0%) translateY(2rem) rotateZ(0deg);

    &.toggle-button {
        left: 100%;
        top: 0;
        transform: translateX(-100%) translateY(0rem) rotateZ(180deg);
    }
}

.fade-enter-active,
.fade-leave-active {
    transition-property: opacity, transform;
    transition-duration: $toggle-duration;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}
</style>