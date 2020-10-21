// Partial application transforms a function into another function with smaller arity.

function findVolume(l) {
    return (b, w) => {
        return l * b * w
    }
}

console.log(findVolume(5)(2, 3))

let volumeWithLengthThirty = findVolume(30)
console.log(volumeWithLengthThirty(10, 5))

// ---------------------------------------------------

function findDiscount(discount) {
    return (price) => {
        return price * discount / 100;
    }
}

let tenPercentDiscount = findDiscount(10)
let twentyPercentDiscount = findDiscount(20)
let fiftyPercentDiscount = findDiscount(50)

console.log(tenPercentDiscount(500))
console.log(twentyPercentDiscount(500))
console.log(fiftyPercentDiscount(500))