<script setup>

import ArticleCard from '../components/ArticleCard.vue';
import UserCard from '../components/UserCard.vue';
import { shallowRef } from 'vue';
const elements = shallowRef([
    { component: ArticleCard },
    { component: ArticleCard },
    { component: ArticleCard },
    { component: ArticleCard },
    { component: ArticleCard },
    { component: ArticleCard },
    { component: ArticleCard },
    { component: ArticleCard },
    { component: ArticleCard },
    { component: ArticleCard },
    { component: UserCard, imgSrc: "logo.png" },
    { component: ArticleCard },
    { component: ArticleCard },
    { component: ArticleCard },
    { component: ArticleCard },
    { component: ArticleCard },
    { component: ArticleCard },
    { component: ArticleCard },
    { component: ArticleCard },
    { component: ArticleCard },
    { component: ArticleCard },
])

</script>

<template>
    <div class="wrapper">
        <component v-for="(component, index) in elements" :is="component.component" :title="index + 1" :key="index"
            :imgSrc="component.imgSrc" />
    </div>
</template>

<style scoped lang="scss"></style>