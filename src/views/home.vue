<template>
	<FormField
		label="瞬时产量(10⁴m³/d)"
		v-model="sscl"
		:required="true"
		:clearable="true"
		name="sscl"
		:readonly="false"
	/>
	<FormField
		label="瞬时产量(10⁴m³/d)"
		v-model="sscl"
		:required="true"
		:clearable="true"
		name="sscl"
		:readonly="false"
	/>
	<van-button style="margin-top: 20px" @click="submit">提交</van-button>
</template>

<script>
import { ref } from "vue";
import { SInput, FormField } from "@c/index.js";
export default {
	components: {
		SInput,
		FormField,
	},
	setup() {
		const sscl = ref("123");
		const submit = () => {
			sscl.value = "122";
			console.log(("sscl", sscl.value));
		};
		return {
			sscl,
			submit,
		};
	},
};
</script>

<style lang="scss" scoped></style>
