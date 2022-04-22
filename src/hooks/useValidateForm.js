export default function useValidateForm(){
    const validateForm = (childRefs,rules) => {
        let errMsg = null
        childRefs.forEach((item) => {
            let rule=null
            for(let key in rules){
                if(key==item.name){
                    rule=rules[key]
                }
            }
            if ("validate" in item&&rule) {
                let result = item.validate(rule);
                if (!errMsg && result) {
                    errMsg = result;
                }
            }
        });
        return errMsg;
    };
    const validateRule=(val,rule)=>{
        let errmsg=null
        if(!rule){
            return errmsg
        }
        rule.forEach(r=>{
            if(errmsg?.length>0){
                return
            }
            if('required' in r){
                errmsg=!val&&r?.message?r.message:null
            } else if('min' in r||'max' in r){
                if(!isNaN(val)){
                    errmsg=(+val<+r['min']||+val>+r['max'])?r?.message?.length>0?r.message:`请控制在${r[min]}到${r[max]}以内}`:null
                }
            } else if('validator' in r){
                errmsg=r['validator'](val)
            }
        })
        return errmsg
    }
    return {
        validateForm,
        validateRule,
    }
}