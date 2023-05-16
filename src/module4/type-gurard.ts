//key of guard
type Alphaneumaric = string | number
function add(param1:Alphaneumaric, param2:Alphaneumaric):Alphaneumaric{
    if(typeof param1 == 'number' && typeof param2 == 'number'){
        return param1 + param2
    }
    else{
        return param1.toString()+param2.toString()
    }
}
add('1','2')
add(1,4)

//in gurard

type NormalUserType = {
    name: string;
}

type AdminUserType = {
    name: string;
    role: "admin";
}

const normalUser1: NormalUserType = {name:"Kabul Mia"};
const adminUser1: AdminUserType = {name:"Jabul mia", role:"admin"}