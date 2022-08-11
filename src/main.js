import { createApp } from 'vue'
import App from './App.vue'
import 'vue-select/dist/vue-select.css';
import router from './router'
import store from './store'

import './index.scss'




createApp(App).use(store).use(router).mount('#app')
