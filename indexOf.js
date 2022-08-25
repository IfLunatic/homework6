function indexOf(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return console.log(i)
        }
    }
    return console.log(-1)
}
indexOf([1, 2, 3], 1)               // 0
indexOf([1, 2, 3], 4)               // -1