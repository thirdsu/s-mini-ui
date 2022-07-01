import { createRouter, createWebHashHistory } from "vue-router";
// 1. Define route components.
// These can be imported from other files
const Home = () => import("@/views/home.vue");
const VitrulList = () => import("@/views/vitrulList.vue");

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
	{
		path: "/",
		component: Home,
		meta: {
			keepAlive: true,
		},
	},
	{
		path: "/vlist",
		component: VitrulList,
		meta: {
			keepAlive: false,
		},
	},
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

