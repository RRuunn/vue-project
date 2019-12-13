//入口文件
import Vue from 'vue';

//导入路由的包
import VueRouter from 'vue-router';
//安装路由
Vue.use(VueRouter);

//导入vue-resource
import VueResource from 'vue-resource';
//安装vue-resource
Vue.use(VueResource);

//导入MUI的样式
import './lib/mui/css/mui.min.css';
//导入扩展图标样式
import './lib/mui/css/icons-extra.css';

//导入Mint-UI中的组件
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

//导入自己的router.js路由模块
import router from './router.js';

//导入app组件
import app from './app.vue';


var vm = new Vue({
	el:"#app",
	render:c=>c(app),
	router//挂载对象到VM实例上
})