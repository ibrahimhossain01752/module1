let emni:any;

emni = "Next Level Web Developer";

(emni as string).length;

function kgToGram(params: string|Number |undefined):string | number | undefined{
    if(typeof params === "string") {
        const value = parseFloat(params) * 1000;
        return `The converted result is: ${value}`;
    }
    if(typeof params === "number") {
        const value = params * 1000;
        return value;
    }
}

const resultToBeNumber = kgToGram(1000) as number;
const resultToBeString= kgToGram ("5000") as string;

type CustomErrorType={
    message: string;
}

try{

}catch(err){
    console.log((err as CustomErrorType).message);
}