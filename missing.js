function missing(array) {
    if (array.length === 0 || array.length === Math.max.apply(null, array)) {
        return console.log(undefined)
    }
    return console.log(((Math.max.apply(null, array) + 1) / 2 * (array.length + 1)) -
    array.reduce(function(a,b){return(a+b)}))
}
missing([])                         // undefined
missing([1, 4, 3])                  // 2
missing([2, 3, 4])                  // 1
missing([5, 1, 4, 2])               // 3
missing([1, 2, 3, 4])               // undefined