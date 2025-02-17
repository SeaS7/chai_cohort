// person.Prototype = Constructor, getFullName, getAge, Object
class person{
    constructor(fname, lname, age, city){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.city = city;
    }

    getFullName(){
        return this.fname + " " + this.lname;
    }
    getAge(){
        return this.age;
    }
}
// Creating objects of class person
// p1.__proto__ = person.prototype;
// p2.__proto__ = person.prototype;

const p1 = new person("John", "Doe", 30, "New York");
const p2 = new person("Jane", "Doe", 25, "California");

p1.fname = "Ali";

console.log(p1.getFullName());