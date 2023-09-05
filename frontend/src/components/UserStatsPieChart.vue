<template>
    <div class="wrapper">
        <apexchart type="pie" :options="chartOptions" :series="data" :width="500"></apexchart>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

const { data } = defineProps(['data']);
const chartOptions = ref({
    chart: {
        type: 'pie',
    },
    labels: ['Users haven\'t seen the avatar', 'Users saw the avatar'],
    title: {
        text: '',
        align: 'center',
        margin: 20,
    },

});
console.log(data)
</script>
  
<script>
export default {
    components: {
        apexchart: VueApexCharts,
    },
};
</script>
<style scoped lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>