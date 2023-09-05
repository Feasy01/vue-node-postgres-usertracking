<script setup>
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue';
import { onMounted } from 'vue'
import { downloadUserData } from './utils/downloadUserData'
import { isSessionActive } from './utils/isSessionActive'
import axios from 'axios';
onMounted(async () => {
  /*checks in session storage if user has already been on the website -> updates the session accordingly
   
  */
  if (!isSessionActive()) {

    const uid = await downloadUserData()
    sessionStorage.setItem('userId', uid);
    sessionStorage.setItem('seenAvatar', false);
    axios.post(`http://${import.meta.env.VITE_API_ADDRESS}:${import.meta.env.VITE_API_PORT}` + '/api/users/create',
      {
        "uid": uid
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
})



</script>

<template>
  <div id="root">
    <Sidebar class="sidebar" />
    <RouterView class="router-view" />
  </div>
</template>

<style scoped lang="scss">
#root {
  display: grid;
  grid-template-areas: 'sidebar router-view';
  grid-template-columns: auto 1fr;
  font-family: sans-serif;
}

.sidebar {
  grid-area: 'sidebar';
}

.router-view {
  grid-area: 'router-view';
  padding: 1rem;
}
</style>