import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { createApp } from 'vue';

import 'the-new-css-reset/css/reset.css';
import VueApexCharts from "vue3-apexcharts";
import App from '@/App.vue';
import router from '@/router/index';

const app = createApp(App);
app.use(VueApexCharts);
app.use(router);

app.mount('#app');