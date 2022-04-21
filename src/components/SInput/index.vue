<template>
	<div class="SInputWrap">
		<div class="fieldWrap">
			<div class="innerPreWrap">
				<slot name="innerPrepend" />
			</div>
			<div class="inputWrap">
				<input
					:name="name"
					:type="renderType()"
					:readonly="readonly"
					:value="state.value"
					@input="updateInput"
					@blur="blurInput"
					@focus="focusInput"
				/>
				<i
					v-if="clearable && state.value?.toString()?.length > 0 && !readonly"
					class="van-icon van-icon-clear clear-icon"
					@click.stop="reset"
				/>
			</div>
			<div class="rightWrap">
				<slot name="right" />
			</div>
		</div>
		<div class="errMsg" v-if="state.errMsg && state.errMsg.length > 0">
			{{ state.errMsg }}
		</div>
	</div>
</template>

<script>
import { reactive, onUpdated, ref, watch, getCurrentInstance, inject } from "vue";
export default {
	name: "SInput",
	// props: ["type", "name", "modelValue", "readonly", "required", "clearable"],
	setup(props, context) {
		let { attrs } = context;
		console.log(context.attrs);
		const state = reactive({
			value: attrs.modelValue,
			errMsg: "",
			noteMsg: "",
		});
		const updateInput = ($event) => {
			state.value = $event.target.value;
			context.emit("update:modelValue", state.value);
		};
		const blurInput = () => {
			context.emit("blur", state.value);
		};
		const focusInput = () => {
			context.emit("focus", state.value);
		};
		const renderType = () => {
			let type = attrs.type;
			let typeArr = ["number", "tel", "password"];
			if (!type || typeof type !== "string" || !typeArr.includes(type)) {
				return "";
			}
			return type;
		};
		const validate = (rule) => {
			if (rule) {
				// const { validateRule } = new Validate();
				// let errmsg = validateRule(state.value, rule);
				// if (errmsg?.length > 0) {
				// 	return `${errmsg}`;
				// }
			}
			return null;
		};
		const reset = () => {
			state.value = "";
			state.errMsg = "";
			state.noteMsg = "";
			context.emit("update:modelValue", "");
		};
		// watch([() => attrs.modelValue], (newVal, oldVal) => {
		// 	state.value = newVal[0];
		// });
		onUpdated(() => {
			state.value = context.attrs.modelValue;
		});
		return {
			state,
			...attrs,
			updateInput,
			validate,
			reset,
			blurInput,
			focusInput,
			renderType,
		};
	},
};
</script>
<style lang="less" scoped>
.SInputWrap {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	.fieldWrap {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex: 1;
		.inputWrap {
			flex: 1;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			// border-bottom: 1px solid #ccc;
			input {
				width: 100%;
				border: 0;
			}
		}
	}
	.errMsg {
		color: red;
		line-height: 12px;
		font-size: 12px;
	}
}
</style>
