import './assets/main.css'
import './assets/custom.css'
import './assets/navbar.css'
import './assets/sidebar.css'
import './assets/footer.css'
import './assets/products.css'
import './assets/auth.css'

import './assets/extra/extraAssets'

import { createApp } from 'vue'
import App from './App.vue'
import router from './services/router'
import store from './services/store';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
