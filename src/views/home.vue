<template>
	<SForm ref="ruleForm">
		<SField
			label="年龄"
			v-model="age"
			:required="true"
			:clearable="true"
			name="age"
			:readonly="false"
		/>
	</SForm>

	<van-button style="margin-top: 20px" @click="submit">提交</van-button>
</template>

<script>
import { ref } from "vue";
import { SInput, SField, SForm } from "@c/index.js";
export default {
	components: {
		SInput,
		SField,
		SForm,
	},
	setup() {
		const age = ref("13");
		const ruleForm = ref("");
		const submit = () => {
			console.log("formItemRefs", ruleForm.value.formItemRefs);
			console.log(("age", age.value));
		};
		return {
			age,
			ruleForm,
			submit,
		};
	},
};
</script>

<style lang="less" scoped>
.comPage {
	padding-top: 100px;
	.comWrap {
		.a {
		}
		.table {
		}
	}
}
</style>
