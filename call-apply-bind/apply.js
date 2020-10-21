let hero1 = {
    name: 'Ironman',
    ability: 'fly'
}

let hero2 = {
    name: 'Batman',
    ability: 'fight'
}

printHeroInfo = function (franchise, color) {
    console.log(this.name + ' can ' + this.ability + '. He wears a suit of ' + color + ' color. He belongs to ' + franchise + ' franchise.')
}

printHeroInfo.apply(hero1, ['Marvel', 'Red'])
printHeroInfo.apply(hero2, ['Justice League', 'Black'])