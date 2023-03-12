import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons";

import * as FaIcons from "oh-vue-icons/icons/fa";
import * as BiIcons from "oh-vue-icons/icons/bi";
import * as MdIcons from "oh-vue-icons/icons/md";
import Toast from "vue-toastification";
import type { PluginOptions } from "vue-toastification";



import './assets/main.css'

import "vue-toastification/dist/index.css";

const app = createApp(App)


const Fa = Object.values({ ...FaIcons, ...BiIcons, ...MdIcons });

const options: PluginOptions =  {

}

app.use(createPinia())
app.use(router)

addIcons(...Fa);
app.use(Toast, options)
app.component("v-icon", OhVueIcon);
app.mount('#app')