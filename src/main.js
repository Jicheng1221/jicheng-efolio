//import './assets/main.css'
//import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { initializeApp } from "firebase/app";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

const app = createApp(App);
app.use(PrimeVue,{
    theme:{
        preset:Aura
    }
})
app.use(router)

app.mount('#app')
//createApp(App).mount('#app')

const firebaseConfig = {
    apiKey: "AIzaSyA8sq5ibZjOv0G3ik1VVSj2QSC0Zy7S8Jg",
    authDomain: "week7-jicheng.firebaseapp.com",
    projectId: "week7-jicheng",
    storageBucket: "week7-jicheng.appspot.com",
    messagingSenderId: "971262461845",
    appId: "1:971262461845:web:455983d33ec89794fd589c"
  };
  
  // Initialize Firebase
initializeApp(firebaseConfig);