<script setup>
import { ref, onBeforeMount, onMounted } from 'vue';
import axios from 'axios';
import UserStatsTable from '../components/UserStatsTable.vue';
import UserStatsPieChart from '../components/UserStatsPieChart.vue';
const numberOfUsersAccessedPage = ref(0);
const numberOfUsersSeenAvatar = ref(0);
const loading = ref(true);

onBeforeMount(async () => {
    try {
        let data;
        await axios.get(`http://${import.meta.env.VITE_API_ADDRESS}:${import.meta.env.VITE_API_PORT}` + '/api/users/getUsersCount').then((response) => {
            data = response.data;
        });
        numberOfUsersAccessedPage.value = data.userCount.countFalse + data.userCount.countTrue;
        numberOfUsersSeenAvatar.value = data.userCount.countTrue;
        loading.value = false;
    } catch (error) {
        console.error('Error fetching data:', error);
        loading.value = false;
    }
});
</script>

<template>
    <div class="wrapper">

        <UserStatsTable v-if="!loading" :number-of-users-accessed-page="numberOfUsersAccessedPage"
            :number-of-users-seen-avatar="numberOfUsersSeenAvatar" />
        <UserStatsPieChart v-if="!loading"
            :data="[numberOfUsersAccessedPage - numberOfUsersSeenAvatar, numberOfUsersSeenAvatar]" />
        <div v-else>
            LOADING
        </div>


    </div>
</template>

<style scoped lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: top;
}
</style>