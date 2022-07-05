import { createRouter, createWebHashHistory } from "vue-router";
// 1. Define route components.
// These can be imported from other files
const Home = () => import("@/views/home.vue");
const VitrulList = () => import("@/views/vitrulList.vue");
const PromiseDemo=()=>import("@/views/promiseDemo.vue")

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
	{
		path: "/",
		component: Home,
		meta: {
			keepAlive: true,
			title:'定制化表单UI组件'
		},
	},
	{
		path: "/vlist",
		component: VitrulList,
		meta: {
			keepAlive: false,
			title:'虚拟列表简单实现'
		},
	},
	{
		path:"/spro",
		component:PromiseDemo,
		meta: {
			keepAlive: false,
			title:'手写promise实现'
		},
	}
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes: routes,
});
router.beforeEach((to) => {
	if (to.meta.title) {
	  document.title = to.meta.title
	}
  })

