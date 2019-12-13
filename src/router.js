import VueRouter from 'vue-router';

import HomeContainer from './components/tabbar/HomeContainer.vue';
import memberContainer from './components/tabbar/memberContainer.vue';
import shopcarContainer from './components/tabbar/shopcarContainer.vue';
import searchContainer from './components/tabbar/searchContainer.vue';

var router = new VueRouter({
	routes:[//配置路由规则
	{ path:'/',redirect:'/home' },
	{ path:'/home',component:HomeContainer},
	{ path:'/member',component:memberContainer},
	{ path:'/shopcar',component:shopcarContainer},
	{ path:'/search',component:searchContainer}
	],
	linkActiveClass:'mui-active'
})
//把路由对象暴露出去
export default router