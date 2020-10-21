let hero3 = {
    name: 'Spiderman',
    ability: 'fly'
}

printHeroInfo = function (franchise, color, age) {
    console.log(this.name + ' can ' + this.ability + '. He wears a suit of ' + color + ' color. He belongs to ' + franchise + ' franchise. His age is ' + age)
}

// Here bind returns a function which we can call later
// passing all parameters from bind method
var spiderman = printHeroInfo.bind(hero3, 'Marvel', 'Blue and Red', 35)
spiderman();

// Custom function need to return a function
// Anything you add to Function.prototype will be accessible to all the other methods we write 
Function.prototype.customBind = function (...args) {
    var obj = this,
        params = args.slice(1)      // using slice method
    return function (...args2) {
        // obj.call(args[0], params[0], params[1], params[2]) 
        obj.apply(args[0], [...params, ...args2])       // concatenating two arrays
    }
}

// Here bind returns a function which we can call later
// passing the 2nd argument from function call
var spiderman2 = printHeroInfo.customBind(hero3, 'Marvel')
spiderman2('Blue and Red', 40);