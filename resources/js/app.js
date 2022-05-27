require('./bootstrap');

import { createApp } from 'vue';
import HeaderComponent from "./components/HeaderComponent";

const app = createApp({});
app.component('header-component', HeaderComponent);
app.mount('#app');