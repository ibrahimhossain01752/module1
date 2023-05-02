//ternary operator
const age = 22;
const isAdults = age >= 18? "Yes" : "No";
// console.log(isAdults);

//Nullish coalescing operator [eita sudhu null r undifined er khertre kaj kore]
//Null and undefined

const isAuthebticUser = undefined;
const username = isAuthebticUser ?? "Guest";

console.log(username);
