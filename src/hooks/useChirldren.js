import { reactive, toRefs, ref, watch, onMounted, getCurrentInstance, inject } from "vue";
export default function useChildren(){
    const genChildren=()=>{
        const addFormRefs = inject("addFormRefs", function () {});
        if (addFormRefs) {
            const { proxy } = getCurrentInstance();
            addFormRefs(proxy);
        }
    }

    onMounted(()=>{
        genChildren()
    })
    return {
        genChildren,
    }
}