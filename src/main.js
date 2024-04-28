import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router.js'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Editor from 'primevue/editor'
import 'primevue/resources/themes/saga-blue/theme.css'
const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.component('Button', Button)
app.component('Editor', Editor)
app.mount('#app')
