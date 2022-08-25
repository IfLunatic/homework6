function isPrime(n) {
    if (n === 1 || n === 0) {
        return console.log(false)
    } else {
        for (var i = 2; i < n; i++) {
            if ( n % i === 0){
                return console.log(false)
                } 
            }
            return console.log(true)      
    }    
}                      
isPrime(0)
isPrime(1)
isPrime(17)
isPrime(10000000000000)