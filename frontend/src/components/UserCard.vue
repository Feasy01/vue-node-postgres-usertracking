<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { isAvatarSeen } from '../utils/isAvatarSeen'
import axios from 'axios'
defineProps(['imgSrc'])
const componentRef = ref(null);

const handleIntersection = async (entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting && !isAvatarSeen()) {
            sessionStorage.setItem('seenAvatar', true);
            const uid = sessionStorage.getItem('userId')
            axios.post(`http://${import.meta.env.VITE_API_ADDRESS}:${import.meta.env.VITE_API_PORT}` + '/api/users/seenAvatar',
                {
                    uid
                })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });

        }
    }
};


const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 1,
});
onMounted(() => {
    if (componentRef.value) { observer.observe(componentRef.value) };
});
onBeforeUnmount(() => {
    if (observer) {
        observer.disconnect();
    }
});
</script>


<template>
    <div class="card" ref="componentRef">
        <div class="card-header">
            USER
        </div>
        <div class="card-body">
            <h5 class="card-title">User image</h5>
            <img src="@/assets/logo.png" alt="Image" />
        </div>
    </div>
</template>
  

  
<style scoped lang="scss">
.card {
    margin: 1rem;
}

.card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>