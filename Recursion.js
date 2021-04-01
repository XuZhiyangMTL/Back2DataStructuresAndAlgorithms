function findFactorialRecersive(number){
    if(number===2){
        return 2
    }
    return number*findFactorialRecersive(number-1)
}
console.log(findFactorialRecersive(5))


function fibonacciRecursive(n){
    if(n<2){
        return n
    }
    return fibonacciRecursive(n-1)+fibonacciRecursive(n-2)
}

console.log(fibonacciRecursive(8))