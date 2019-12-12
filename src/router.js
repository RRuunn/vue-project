
import VueRouter from 'vue-router';
import account from './main/account.vue';
import goodlist from './main/Goodlist.vue'

import login from './subcom/login.vue';
import register from './subcom/register.vue';


var router = new VueRouter({
	routes:[
		//account goodlist
		{ path:'/account',
		 component:account,
		 children:[
		 	{path:'login',component:login},
		 	{path:'register',component:register}
		 ]
	},
		{ path:'/goodlist',component:goodlist}
	]

})

export default router