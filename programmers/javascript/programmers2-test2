function solution(topping) {
    var answer = 0;

    const baseMap = new Map();
    const subMap = new Map();

    for(const t of topping){
        if(!baseMap.has(t)){
            baseMap.set(t, 1);
        }else{
            baseMap.set(t, baseMap.get(t) + 1);
        }
    }

    while(topping){
        const t = topping.pop();

        baseMap.set(t, baseMap.get(t) - 1);
        if(baseMap.get(t) === 0) baseMap.delete(t);

        if(!subMap.has(t)){
            subMap.set(t, 1);
        }else{
            subMap.set(t, subMap.get(t) + 1);
        }

        if(baseMap.size === subMap.size){
            answer++;
        }else if(baseMap.size < subMap.size){
            break;
        }
    }
    
    return answer;
}