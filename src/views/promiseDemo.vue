<template>
	<div></div>
</template>

<script>
import SPromise from "@/utils/SPromise";
export default {
	setup() {
		const promise1 = new SPromise((resolve, reject) => {
			resolve("success");
		});
		promise1.then((value) => {
			console.log(value);
		});

		return {};
	},
};
</script>

<style lang="scss" scoped></style>
