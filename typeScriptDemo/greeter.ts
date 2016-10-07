class Student {
    fullName: string;

    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    middleInitial: string;
    lastName: string;
}

function greetUser(person: Person) {
    // return "Hello, " + person.firstName + " " + person.lastName;
    return `Hello, ${person.firstName} ${person.middleInitial} ${person.lastName}`;
}

// let user = "Jane User";
// let user = [0, 2, 4];
// let user = {
//     firstName: "Bernie",
//     lastName: "Sanders"
// };

let user = new Student("Bernie", "M.", "Sanders");

document.body.innerHTML = greetUser(user);
