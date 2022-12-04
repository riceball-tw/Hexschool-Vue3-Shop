import { createApp } from 'vue';
import './style.css';
import { vfmPlugin } from 'vue-final-modal';
import Toast from 'vue-toastification';
import { currency } from '@/helper/unitFilter';
import App from './App.vue';
import router from './plugins/router';
import 'vue-toastification/dist/index.css';

const app = createApp(App);
app.config.globalProperties.$unitFilters = {
  currency,
};
app.use(router).use(vfmPlugin).use(Toast).mount('#app');
