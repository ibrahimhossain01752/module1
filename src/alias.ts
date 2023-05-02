type CrushType ={
    name: string;
    age?: number;
    profession:string;
    address:string;
} 

const crush1:CrushType ={
    name: 'Moina Pakhi',
    age:22,
    profession:"Web Developer",
    address:"Uganda"
}

const crush2:CrushType ={
    name:"Tia Pakhi",
    profession:"Next Web Developer",
    address:"Argentina"
}

const crush3: CrushType ={
    name:"Homaira pakhi",
    profession:"Student",
    address:"Bangladesh"
}

type MarriedType = boolean;

const isCrushMarried: MarriedType = false;

type CourseName = string;

const next: CourseName = "Next Level web Developer Course";

type OperationType = (x: number, y: number) => number;

const calculate = (
    number1: number,
    number2:number,
    operation: OperationType
) => {
    return operation(number1, number2);
};

calculate(12,23,(x,y)=> x+y);
calculate(13,20,(x,y)=> x-y);
calculate(5,7,(x,y)=> x*y);