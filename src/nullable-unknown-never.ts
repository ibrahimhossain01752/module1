//null types
const searchName = (value: string | null) =>{
    if(value === null){
        console.log("There is nothing to search");
    }
    else{
        console.log("searching..");
    }
};

searchName(null);


//unknown

const geyMyCarSpeed = (speed: unknown) =>{
    if(typeof speed === "number"){
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    }
    if(typeof speed === "string"){
        const [value, unit] = speed.split(" ");

        const convertedSpeed = (parseFloat(value) * 1000) / 3600
        console.log(`My speed is ${convertedSpeed}`);
    }
    else{
        console.log("There is wrong type");
    }
};

geyMyCarSpeed(10);
geyMyCarSpeed("10 kmh^-1");
geyMyCarSpeed(true);


//never type

function throwError(message: string): never {
    throw new Error(message);
}
throwError("Error hoyeche");
