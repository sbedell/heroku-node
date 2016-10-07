var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    // return "Hello, " + person.firstName + " " + person.lastName;
    return "Hello, " + person.firstName + " " + person.middleInitial + " " + person.lastName;
}
// let user = "Jane User";
// let user = [0, 2, 4];
// let user = {
//     firstName: "Bernie",
//     lastName: "Sanders"
// };
var user = new Student("Bernie", "M.", "Sanders");
document.body.innerHTML = greeter(user);
