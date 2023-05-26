/* type myArray<T> = Array<T>


const myNumber: myArray<number> =[1,3,45,56,65,];
const myString:myArray<string> =["12","we"];
const myBoolean:myArray<boolean> =[true,false] */


/* type myArray<T> = Array<T>
type dataType = {name:string, age:number};

const ourInfo:myArray<dataType> =[
    {name: "name", age:23},
    {name: "name", age:23},
    {name: "name", age:23},
] */


//tuple in generic

/* type myGen<X,Y> = [X,Y];

const A : myGen<string,number> =["name",56];
const B : myGen<number,string> =[34,"dfdf"] */


//generic in function

/* const printInfo = <P,Q>(param1:P, param2:Q)=>{
    console.log(`param1: ${param1}, param2: ${param2}`)
}

printInfo<string,number>("abul",45);
printInfo<number,boolean>(34,true); */


//keyof type

/* type  MovieType = {
    name: string;
    duration: number;
    categories: string
}

type myMovies = keyof MovieType;
console.log() */