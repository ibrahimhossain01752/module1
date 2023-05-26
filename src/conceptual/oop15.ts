//create a classs

/* class Person{
    name:string;
    age:number;

    constructor(name1:string, age1:number){
        this.name = name1;
        this.age = age1;
    }

}

const p1 = new Person("Abul",23);
console.log(p1); */



//inheritence [inheritence is feature of another to own]

/* class Person1 {
    name: string;
    age: number;

    constructor(name1: string, age1: number){
        this.name = name1;
        this.age = age1;
    }
    show() {
        console.log(`Name:${this.name} and Age:${this.age}`);
    }
}
class Person2 extends Person1 {
    
salary: number;
    position:string;

    constructor(name1: string, age1: number, salary1:number, position1:string){
       super(name1, age1);
        this.salary = salary1;
        this.position = position1;
    }
    show() {
        console.log(`Name:${this.name} and Age:${this.age}`);
    }
}

const p2 = new Person1("Jabul",45);
const p3 = new Person2("Jabul",45,3000,"developer");
console.log(p3); */