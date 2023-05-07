//Generic Interface

// interface CrushInterface <T, U = null>{
//     name: string;
//     husband:T;
//     wife?:U;
// }

// interface PersonInterface{
//     name: string; age: number

// }

// const crush4: CrushInterface<PersonInterface,PersonInterface> = {
//     name: "Kate",
//     husband:{
//         name: "Persian",
//         age:30,
//     },
//     wife: {
//         name:"Winslet",
//         age:32,
//     }
// }

// const crush1 : CrushInterface<boolean,string> = {
//     name: "Kate Wins", husband:true, wife:"Chokina"
// }

// const crush2 : CrushInterface<string>= {
//     name: "Kate Wins", husband:"abul",
// }

// interface HusbandInterface {
//     name: string;
//     salary: number;
// }

// const crush3: CrushInterface<HusbandInterface> = {
//     name:"Kate Winslet",
//     husband:{
//         name: "Persian",
//         salary:0.2,
//     },
// };








//Generic

type GenericArray<T> = Array<T>;

const rollNumbers: GenericArray <number> = [12,34,6];
const rollNumbers2 : GenericArray <string> = ["12","14","7"];
const rollNumbers3 : GenericArray <boolean> = [true, false, false];

type NameRollType = {name: string; roll:number};

const userNameAndRollNumbers : GenericArray <NameRollType> = [
    {
        name:"Mr. x",
        roll:3
    },
    {
        name:"Mr.y",
        roll:3
    },
]

//Generic tuple

type GenericTuple<x,y> = [x,y];

const relation : GenericTuple<string,string> = ["Persian","Winslet"];

// type relationWithSalaryType ={name:string; salary:number};

interface relationWithSalaryType{
    name:string; 
    salary:number
}

const relationwithSalary : GenericTuple<relationWithSalaryType, string> = [
    {
        name:"Persian",
        salary:1000000
    },
    "Kingslet",
];