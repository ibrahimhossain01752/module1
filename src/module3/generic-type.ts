// //Generic

// type GenericArray<T> = Array<T>;

// const rollNumbers: GenericArray <number> = [12,34,6];
// const rollNumbers2 : GenericArray <string> = ["12","14","7"];
// const rollNumbers3 : GenericArray <boolean> = [true, false, false];

// type NameRollType = {name: string; roll:number};

// const userNameAndRollNumbers : GenericArray <NameRollType> = [
//     {
//         name:"Mr. x",
//         roll:3
//     },
//     {
//         name:"Mr.y",
//         roll:3
//     },
// ]

// //Generic tuple

// type GenericTuple<x,y> = [x,y];

// const relation : GenericTuple<string,string> = ["Persian","Winslet"];

// // type relationWithSalaryType ={name:string; salary:number};

// interface relationWithSalaryType{
//     name:string; 
//     salary:number
// }

// const relationwithSalary : GenericTuple<relationWithSalaryType, string> = [
//     {
//         name:"Persian",
//         salary:1000000
//     },
//     "Kingslet",
// ];