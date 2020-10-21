// name2 borrowing function defined in 'name'
// -----------------------------------------

let name = {
    firstName: 'John',
    lastName: 'Snow',
    printName: function () {
        console.log(this.firstName + ' ' + this.lastName);
    }
}

let name2 = {
    firstName: 'Arya',
    lastName: 'Stark'
}

name.printName();

// when we pass name2 variable to call() function called on printName,
// for printName 'this' refers to 'name2' 
name.printName.call(name2);  

// ----------------------------------------------------------------

// Global function declaration
printDesignation = function(designation) {
    console.log(this.firstName + ' ' + this.lastName + ' is ' + designation);
}

printDesignation.call(name, 'a Lord Commander')
printDesignation.call(name2, 'an Assasin')
