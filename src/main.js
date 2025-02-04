import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import store from './views/store/index';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app')
