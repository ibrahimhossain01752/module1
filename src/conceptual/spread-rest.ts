//spread operator

/* const heroArray1:string[] =["Abul","Kabul","Jabul"];
const heroArray2:string[] =["Modon","Lotif","Dilder"];

heroArray1.push(...heroArray2);
console.log(heroArray1); */



//rest parameter

/* const heroArray = (...score:number[]):number =>{
    let sum:number = 0;

    score.map(n=>{
        sum = sum + n;
    })
    return sum;
}

console.log(heroArray(1,34,56,78,56)); */


/* const heroString = (...strings:string[]):void => {
    strings.map(str => console.log(str))
}

heroString('programing',"hero","apollo") */