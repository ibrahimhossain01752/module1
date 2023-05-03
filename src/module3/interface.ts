//type Alias

type User = {
    name: string;
    age: number;
}

//Interface

interface IUser{
    name: string;
    age: number;
}

interface IExtendedUser extends IUser{
    role:string;
}

const user: IExtendedUser = {
    name: "omanush",
    age:2000,
    role:"Unknown"
}

// const userWithTypeAlias : User ={
//     name: "Type Alias",
//     age: 22,
// }

// const userWithInterface : IUser ={
//     name:"User",
//     age: 21
// }