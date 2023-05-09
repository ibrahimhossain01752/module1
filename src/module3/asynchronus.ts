//Mocking
// const makePromise = (): Promise<string> => {
//     return new Promise<string>((resolve, reject) => {
//         const data : string = "Data is fetched";
//         if(data) {
//             resolve(data);
//         } else {
//             reject("Failed to fetch data!");
//         }
//     })
// };
// const makePromiseBoolean = (): Promise<boolean> => {
//     return new Promise<boolean>((resolve, reject) => {
//         const data : boolean = false;
//         if(data) {
//             resolve(data);
//         } else {
//             reject("Failed to fetch data!");
//         }
//     })
// };
// const makePromiseObject = (): Promise<object> => {
//     return new Promise<object>((resolve, reject) => {
//         const data : object = {other:"Data is fetched"};
//         if(data) {
//             resolve(data);
//         } else {
//             reject("Failed to fetch data!");
//         }
//     })
// };

// const getPromiseData = async (): Promise<string> => {
//     const data = await makePromise();
//     return data;
// }
// const getPromiseBooleanData = async (): Promise<boolean> => {
//     const data = await makePromiseBoolean();
//     return data;
// }


//JSON placeholder

// interface Itodo {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
// }

// const getTodo = async (): Promise<Itodo> => {
//     const reponse = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     return await reponse.json();
// }

// const getItodo = async (): Promise<void>=> {
//     const result = await getTodo();
//     console.log(result);
// }