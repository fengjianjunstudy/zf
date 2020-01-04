function mergeOptions(o1,o2){
    //类型不同 o2直接覆盖
    if(typeof o1 !== typeof o2){
        return o2;
    }
    if(o1.constructor !== o2.constructor){
        return o2;
    }
    if(typeof o1 !== 'object'){
        return o2;
    }
    if(Array.isArray(o1)){
        return [...new Set([...o1,...o2])]
    }
    let mergeOpts = {};
    let k1s = Object.keys(o1);
    let k2s = Object.keys(o2);
    [...k1s,...k2s].forEach((key) =>{
        mergeOpts[key] = mergeOptions(o1[key],o2[ke]);
    })
    return mergeOpts;
}