import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/router.js'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')
