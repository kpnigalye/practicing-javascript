let multiply = function(x, y) {
    console.log(x * y)
}

multiply(2, 3)

// This function returns a copy of function where x is set to 5
multiplyByFive = multiply.bind(this, 5)
// this call will set y to 10
multiplyByFive(10)  


multiplyByTen = multiply.bind(this, 10)
multiplyByTen(12)  
