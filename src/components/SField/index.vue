<template>
	<van-cell class="SFieldWrap">
		<template #title>
			{{ label }}
		</template>
		<template #default>
			<SInput v-bind="$attrs" />
		</template>
	</van-cell>
</template>

<script>
import { toRefs, onMounted } from "vue";
import SInput from "../SInput/index.vue";
import useChildren from "@/hooks/useChirldren";
export default {
	components: {
		SInput,
	},
	props: ["label"],
	setup(props) {
		onMounted(() => {
			const { genChildren } = useChildren();
			genChildren();
		});
		return {
			...toRefs(props),
		};
	},
};
</script>

<style lang="less" scoped>
.SFieldWrap {
}
</style>
