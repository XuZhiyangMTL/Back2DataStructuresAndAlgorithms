function addTo80(n){
    console.log('long time processing')
    return n+80
}

function memorizedAddTo80(){
    let cache={}
    return function(n){
        if(n in cache){
            return cache[n]
        }else{
            console.log('long time processing')
            cache[n]=n+80
            return cache[n]
        }
    }
}

const memorized=memorizedAddTo80()
// console.log('1', memorized(6))
// console.log('2', memorized(6))

function fibonacci(n){
    if(n<2)
        return n
    return fibonacci(n-1)+fibonacci(n-2)
}
function fibonacciMaster(){
    let cache={}
    return function fib(n){
        if(n in cache){
            return cache[n]
        }else{
            if(n<2){
                return n
            }else{
                cache[n]=fib(n-1)+fib(n-2)
                return cache[n]
            }
        }
    }
}

const fasterFib=fibonacciMaster()
console.log('DP',fasterFib(10))