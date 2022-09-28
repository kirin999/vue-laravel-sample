require('./bootstrap');

import router from './routes';
import { createApp } from 'vue';
import HeaderComponent from "./components/HeaderComponent";

// すべてのVueアプリケーションはcreateApp関数で新しいアプリケーションインスタンスを生成するところから始まる
const app = createApp({});

app.component('header-component', HeaderComponent);
app.use(router).mount('#app');