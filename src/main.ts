import 'normalize.css'
import './assets/style/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'

store.dispatch('login/loadLocalLogin')
const app = createApp(App)
app.use(store, key).use(router).mount('#app')
