<template>
	<div ref="list" class="infinite-list-container" @scroll="scrollEvent($event)">
		<div class="infinite-list-phantom" :style="{ height: listHeight + 'px' }"></div>
		<div class="infinite-list" :style="{ transform: getTransform }">
			<div
				ref="items"
				class="infinite-list-item"
				v-for="(item, index) in visibleData"
				:key="index"
				:style="{ height: itemSize + 'px', lineHeight: itemSize + 'px' }"
			>
				{{ item.value }}
			</div>
		</div>
	</div>
</template>

<script>
import { computed, reactive, toRefs, ref, onMounted } from "vue";
export default {
	props: {
		//所有列表数据
		listData: {
			type: Array,
			default: () => {
				const result = [];
				const total = 10000;
				for (let i = 0; i < total; i++) {
					result.push({
						value: i,
					});
				}
				return result;
			},
		},
		//每项高度
		itemSize: {
			type: Number,
			default: 100,
		},
		//预估高度
		estimatedItemSize: {
			type: Number,
		},
	},
	setup(props) {
		const list = ref("");
		const state = reactive({
			screenHeight: 0,
			startOffset: 0,
			start: 0,
			end: 0,
		});

		const listHeight = computed(() => {
			return props.listData.length * props.itemSize;
		});
		const visibleCount = computed(() => {
			return Math.ceil(state.screenHeight / props.itemSize);
		});
		const getTransform = computed(() => {
			return `translate3d(0,${state.startOffset}px,0)`;
		});
		const visibleData = computed(() => {
			return props.listData.slice(
				state.start,
				Math.min(state.end, props.listData.length)
			);
		});
		const scrollEvent = () => {
			//当前滚动位置
			let scrollTop = list.value.scrollTop; //滚动后顶部隐藏起来的高度
			//此时的开始索引
			state.start = Math.floor(scrollTop / props.itemSize); //向下取整
			//此时的结束索引
			state.end = state.start + visibleCount.value;
			//此时的偏移量
			state.startOffset = scrollTop - (scrollTop % props.itemSize); //偏移n个列表项的像素,使得和下一次的开始索引位置保持一致
		};
		onMounted(() => {
			state.screenHeight = document.documentElement.clientHeight; //clientWidth/clientHeight 就表示一个元素的「内容宽高」，包含元素内容以及内边距,也就是说如果你只想要获取「显示内容区域的大小」就是用 clientWidth
			state.start = 0;
			state.end = state.start + visibleCount.value;
		});
		return {
			list,
			...toRefs(state),
			...toRefs(props),
			listHeight,
			visibleCount,
			getTransform,
			visibleData,
			scrollEvent,
		};
	},
};
</script>
<style scoped>
.infinite-list-container {
	height: 100%;
	overflow: auto;
	position: relative;
	-webkit-overflow-scrolling: touch;
}

.infinite-list-phantom {
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	z-index: -1;
}

.infinite-list {
	left: 0;
	right: 0;
	top: 0;
	position: absolute;
	text-align: center;
}

.infinite-list-item {
	padding: 10px;
	color: #555;
	box-sizing: border-box;
	border-bottom: 1px solid #999;
}
</style>
