function firstRecurringCharacter(input){
    const map = new Map()
    for(let i=0;i<input.length;i++){
        if(map.has(input[i])){
            return input[i]
        }else{
            map.set(input[i], i)
        }
    }
    return undefined
}

console.log(firstRecurringCharacter([3,5,5,2,3,5,1,2,4]))