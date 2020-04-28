console.log('OntottVas is HEEEEEEREE!');

let myVariable = false;

if (myVariable === true) {
    console.log('The condition has been evaluated to true.');
} else {
    console.log('The condition has been evaluated to false');
};


console.log('0 - 9');
for (let i = 0; i < 10; i++) {
    console.log(i);
};


console.log('1 - 10');
for (let i = 0; i < 10; i++) {
    console.log(i+1);
};


console.log('Even numbers <20');
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    };
};


let printNumbersTill = (a) => {
    for (let i = 0; i < a; i++) {
        console.log(i+1);
    };
};

let getGreetingTo = (name) => {
    console.log('Hello ' + name + '!');
};


let values = [1, 5, 76, 89, 122, 1234];

values.forEach((number) => {
    console.log(number);
});