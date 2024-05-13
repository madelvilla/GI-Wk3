 //constructor
class Person {
    constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;}


//method
exercise() {
    console.log("I should probably do SOME form of exercise. Unfortunately.");
}

//method
fetchJob() {
    console.log(`${this.name} works as a ${this.job}`);
}}


//constructor that inherits information from Person constructor
class Programmer extends Person {
    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages = languages;
        this.busy = true; //default value
    }
    //method
    completeTask() {
        this.busy = false;
        console.log(`${this.name} has completed their task.`)
    }
    //method
    acceptNewTask(){
        this.busy = true;
        console.log(`${this.name} can accept a new task.`)
    }

    offerNewTask() {
        if (this.busy) {
            console.log(`${this.name} cannot accept any new tasks.`)
        } else {
        console.log(`${this.name} can accept another task.`)
        }
    }
 
    learnLanguage(newLanguage) {
        this.languages.push(newLanguage);
        console.log(`${this.name} please learn this language: ${newLanguage}`)
    }

    listLanguages() {
        return this.languages;
    }
}

const person1 = new Person("Alec", "Security Engineer", 28);
const p2 = new Programmer("Maeve", "Front End Engineer", 45, ["HTML", "CSS", "JavaScript", "jQuery"]);
const p3 = new Programmer("Milo", "Full Stack Engineer", 38, ["HTML", "JavaScript", "PHP", "Ruby", "Bootstrap"]);
const p4 = new Programmer("Sabina", "Software Engineer", 34, ["HTML", "CSS", "JavaScript", "SQL", "Python", "Java"]);

p2.learnLanguage("PHP");
p3.learnLanguage("SQL");
p4.learnLanguage("Ruby");


console.log(p2.listLanguages());
console.log(p3.listLanguages());
console.log(p4.listLanguages());

console.log(person1);
console.log(p2);
console.log(p3);
console.log(p4);

person1.exercise();
person1.fetchJob();
