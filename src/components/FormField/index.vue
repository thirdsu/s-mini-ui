<template>
	<van-cell class="FormFieldWrap">
		<template #title>
			{{ label }}
		</template>
		<template #default>
			<SInput v-bind="$attrs" />
		</template>
	</van-cell>
</template>

<script>
import { toRefs } from "vue";
import SInput from "../SInput/index.vue";
export default {
	components: {
		SInput,
	},
	props: ["label"],
	setup(props) {
		return {
			...toRefs(props),
		};
	},
};
</script>

<style lang="less" scoped>
.FormFieldWrap {
}
</style>
