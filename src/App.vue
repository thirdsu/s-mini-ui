<template>
	<router-view v-slot="{ Component }">
		<keep-alive>
			<component :key="$route.path" :is="Component" v-if="$route.meta.keepAlive" />
		</keep-alive>
		<component :is="Component" v-if="!$route.meta.keepAlive" />
	</router-view>
</template>

<script>
export default {
	name: "App",
	setup() {
		return {};
	},
};
</script>
<style>
html {
	height: 100%;
}
body {
	height: 100%;
}
#app {
	height: 100%;
}
</style>
