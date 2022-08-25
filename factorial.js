function factorial(n){
    if (n === 1 || n === 0){
        console.log(1)
    } else {
        for (let i = n - 1; i >= 1; i--){
            n = (n * i )  //16 48 96
        }
        console.log(n)
    }
}
factorial(0)                        // 1
factorial(1)                        // 1
factorial(6)                        // 720