//Default Parameters

function sub(num1:number, num2:23){
    return (num1+num2);
}
sub(40,23);

//Spread Operator

const myFriends = ["nodia","kodia","fodia"];
const newFriends = ["rima","Homyra","akter"];

myFriends.push(...newFriends);
// console.log(myFriends);

//rest parametter

const grredFriends = (...friends:string[]):void => {
    friends.forEach((friend)=> console.log(`Hi ${friend}`));
}

grredFriends(
    "kashem",
    "Hashem",
    "Lashem"
)

//array and object destureturing

const myBestFriends = {
    fullName:"Abul Bashar",
    age:23
}
const [bestFriends] = myFriends;
const {fullName} = myBestFriends;
console.log(fullName);