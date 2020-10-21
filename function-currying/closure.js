let add = function(x) {
    return function(y) {
        console.log(x + y)
    }
}

let addTen = add(10)
addTen(20)
