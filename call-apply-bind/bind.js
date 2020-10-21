let hero3 = {
    name: 'Spiderman',
    ability: 'fly'
}

let hero4 = {
    name: 'Aquaman',
    ability: 'swim'
}

printHeroInfo = function (franchise, color) {
    console.log(this.name + ' can ' + this.ability + '. He wears a suit of ' + color + ' color. He belongs to ' + franchise + ' franchise.')
}

var spiderman = printHeroInfo.bind(hero3, 'Marvel', 'Blue and Red')
// this method can be invoked later 
spiderman();