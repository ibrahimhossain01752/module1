//Normal function

function add(num1:number, num2:number): number {
    return num1 + num2;
}

add(23,34);

//Arrow function

const addArrow = (num1:number, num2:number): number => num1 + num2;

const arr = [23,34];

const newArray = arr.map((elem:number) => elem * elem);


//Object type function

const person: {
    name:string;
    balance:number;
    addBalance(money:number):void;

} = {
    name :"Ibrahim",
    balance: 4,
    addBalance:(money:number) {
      console.log(`My new balance is ${this.balance + money}`);
    },

}


//Default Parameters

