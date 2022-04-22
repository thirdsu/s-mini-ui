<template>
	<form>
		<slot />
	</form>
</template>

<script>
import { ref, provide, onMounted } from "vue";
import useValidateForm from "@/hooks/useValidateForm";
import useReset from "@/hooks/useReset";
export default {
	name: "SForm",
	props: ["rule"],
	setup(props) {
		// 获取所有表单组件
		const formItemRefs = ref([]);
		const addFormRefs = (formitem) => {
			formItemRefs.value.push(formitem);
		};
		// 抛出验证规则获取方法
		const getRule = (name) => {
			if (!props.rule || !name) {
				return;
			}
			if (name in props.rule) {
				return props.rule[name];
			}
			return null;
		};
		// 注入子表单组件收集方法
		provide("addFormRefs", addFormRefs);
		// 注入子表单组件验证规则收集方法
		provide("getRule", getRule);
		// 抛出表单验证方法
		const validate = () => {
			return new Promise((resolve, reject) => {
				const { validateForm } = useValidateForm();
				let errmsg = validateForm(formItemRefs.value, props.rule);
				if (!errmsg) {
					resolve();
				} else {
					reject(errmsg);
				}
			});
		};
		// 抛出表单重置方法
		const reset = () => {
			const { resetForm } = useReset();
			resetForm(formItemRefs.value);
		};
		onMounted(() => {
			console.log(formItemRefs.value);
		});
		return {
			formItemRefs,
			addFormRefs,
			validate,
			reset,
		};
	},
};
</script>

<style lang="scss" scoped></style>
