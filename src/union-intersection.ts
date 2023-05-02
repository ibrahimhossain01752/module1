/* type NoobDeveloper = {
    name:string;
}

type JuniorDeveloper = {
    name:string;
    expertise:string;
    experience:string;
}

const newDeveloper:NoobDeveloper | JuniorDeveloper = {
    name:"Moznu Mia",
    expertise:"Javascript",
    experience:"1"
} */

//Intersection

/* type NoobDeveloper = {
    name:string;
}

type JuniorDeveloper = NoobDeveloper &{
    expertise:string;
    experience:string;
}

const newDeveloper:NoobDeveloper | JuniorDeveloper = {
    name:"Moznu Mia",
    expertise:"Javascript",
    experience:"1"
} */


//intersection

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number;
    // expertise:"Javascript";
    // experience:1
}

const newdeveloper: NextLevelDeveloper ={
    name:"Next vhai",
    expertise:"Typescript",
    experience:1,
    leaderExperience:1,
}
