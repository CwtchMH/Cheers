import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'; // Nếu bạn muốn sử dụng các JS components của Bootstrap

const pinia = createPinia()

const app = createApp(App)

app.use(pinia)
app.mount('#app')
