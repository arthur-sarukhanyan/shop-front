import './assets/main.css'
import './assets/custom.css'
import './assets/navbar.css'
import './assets/sidebar.css'
import './assets/footer.css'
import './assets/products.css'
import './assets/auth.css'

import { createApp } from 'vue'
import App from './App.vue'
import axios from './services/axios'
import router from './services/router'
import store from './services/store';

const app = createApp(App);

app.use(axios, {
    baseUrl: import.meta.env.VITE_API_URL,
});

app.use(router);
app.use(store);

// app.use(Vuex);

app.mount('#app');
