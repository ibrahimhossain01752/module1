//type works like a batelion police like they are checked who is legal or who is illegal


//of guard

/* type typeOfData = number | string;
const doSometing = (a: typeOfData):typeOfData =>{
    if(typeof a === 'number'){
        return a;
    }
    return a;
}
console.log(doSometing(23))
console.log(doSometing('hello')) */



//in guard

type X = {
    name: string;
    phone: number;
}

type Y = {
    name:string;
    address:string;
    salary:number;
}

const getInfo=(info:X | Y) =>{
    if("phone" in info){
        return `Type A: phone: ${info.phone}`;
    }
    else if(`salary` in info){
        return `Type B: salary: ${info.salary}`;
    }
}