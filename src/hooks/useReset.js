export default function useReset(){
    const resetForm = (childRefs) => {
        childRefs.forEach((item) => {
            if ("reset" in item) {
                item.reset();
            }
        });
    };
    return {
        resetForm
    }
}