<template>
	<!-- <div class="transform-s-r"></div> -->
	<!-- <div class="transform-style">
		<div></div>
	</div> -->
	<!-- <div class="transition-box"></div> -->
	<div class="display-box">
		<template v-for="item in 68" :key="item">
			<div></div>
		</template>
	</div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
	setup() {
		// 1、transform
		// 主要用于元素变换，rotate(旋转)，scale(缩放),skew(扭曲)，translate(移动)，matrix(矩阵变换)
		// 语法：transform:none|trmasform-functions,none表示不做变换，tansform-functions表示变化函数，可以为一个变换函数或者多个变换函数的组合。
		// 实例：transform:scale(1.2) rotate(30deg)
		// 属性：
		// transform-origin:x-axis y-xais z-axis;用于定义变换变换的基点，默认为元素的中心点。
		// transform-style:flat|preserve-3d:定义嵌套元素在三维空间的呈现。flat:表示所有子元素在2D平面呈现；preserve-3d:表示所有子元素在3D空间中呈现。
		//2、transition
		// 主要用于元素实现过渡动画，
		// 语法：transition:transition-property transition-duration transition-timeing-function transition-delay
		// 实例：transtion:width 2s
		// transition-property(过渡的属性): none|all|property;
		// transition-duration(耗费时长,必需):time(5s/100ms)
		// transition-timeing-function(速度曲线):
		// transition-delay(过渡效果何时开始):time(5s/100ms)

		return {};
	},
};
</script>

<style lang="less" scoped>
// div {
// 	width: 100px;
// 	height: 100px;
// 	background: #3973e7;
// 	margin: 400px auto;
// }
.transform-s-r:hover {
	transform-origin: 100% 100%; //基准位置
	transform: scale(1.5) rotate(-30deg);
}
.transform-style {
	div {
		width: 50px;
		height: 50px;
		background: #fff;
	}
}
.transform-style:hover {
	// transform-style: flat;
	transform-style: preserve-3d;
	transform: scale(2);
}

.transition-box:hover {
	width: 500px;
	transition: width 2s;
	transform: translateX(50%);
}
.display-box {
	width: 100vw;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-end;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	div {
		width: 10vw;
		height: 100px;
		background: #3973e7;
		border: 1px solid #fff;
	}
	div:hover {
		height: 50px;
		background: #6592eb;
		transition: all 300ms ease-in 200ms;
		// transform-origin: 0 0;
	}
}
</style>
