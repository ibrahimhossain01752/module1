/* type HeroDataA = {
    name:string;
    age:number
}
type HeroDataB = HeroDataA &{
    salary:number;
    professional:string;
}
const HeroData:HeroDataB = {
    name:"Abdul",
    age:44,
    salary:4444,
    professional:"Developer"
}

const myFavHero:HeroDataA | HeroDataB={
    name:"Abd",
    age:48,
} */