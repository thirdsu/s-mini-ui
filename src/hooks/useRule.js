export default function useRule(){
    const getRule=(name)=>{
        const get=inject("addRule", function () {});
        return get(name)
    }
    return {
        getRule
    }
}