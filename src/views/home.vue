<template>
	<FormField
		label="年龄"
		v-model="age"
		:required="true"
		:clearable="true"
		name="age"
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
		const age = ref("13");
		const submit = () => {
			age.value = "12";
			console.log(("age", age.value));
		};
		return {
			age,
			submit,
		};
	},
};
</script>

<style lang="scss" scoped></style>
