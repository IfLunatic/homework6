function fib(indexOfNumber) {
    let a = 0
    let b = 1
    let currentIndex = 0
    if (indexOfNumber > 0 && typeof indexOfNumber === `number`) {
        while (currentIndex + 1 < indexOfNumber) {
            b = a + b 
            a = b - a 
            currentIndex ++ 
        }
        return console.log(b)
    } else if (indexOfNumber === 0) {
        return console.log(a)
    }
    return console.log(`Аргумент функції введено некоректно`)
}
fib(0)                              // 0
fib(1)                              // 1
fib(10)                             // 55
fib(20)                             // 6765