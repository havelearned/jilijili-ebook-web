import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import { Quasar, useQuasar, EventBus } from 'quasar'
import quasarUserOptions from '@/quasar-user-options'

import '@/assets/font/font.css'
import service from '@/boot/axios/index'
import { info } from '@/boot/msg'

const bus = new EventBus()
const app = createApp(App)

app.config.globalProperties.$q = useQuasar()
app.config.globalProperties.$api = service
app.config.globalProperties.$info = info
app.config.globalProperties.$bus = bus

app.use(Quasar, quasarUserOptions)
  .use(store)
  .use(router)
  .mount('#app')
