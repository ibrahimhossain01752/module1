//Arrow function

const createArray = (param: string) : string[] =>{
    return[param];
}

const createArray1 = <T> (param: T) : T[] =>{
    return [param]
};

const result1 = createArray1<string>('Bangladesh');
const result2 = createArray1<boolean>(false);

// const createArray2 = <X,Y> (param1: X, param2: Y) : [X,Y] =>{
//     return [param1, param2];

//     };

// const result3 = createArray2<string, string>('Bangladesh','I love yoy');
// const result4 = createArray1<boolean>(false);


//spread operator

const addMeInMyCrushMind  = <T>(myInfo: T): T => {
    const crush = "Kate Winslet";
    const newData = {...myInfo,crush};
    return newData;
}

const myInfo = {
    name:"Persian",
    age:100,
    salary:100000,
}

const result5 = addMeInMyCrushMind(myInfo);

