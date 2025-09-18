
const data = [
    {id:11,name:"E",age:8}, //0
    {id:1,name:"A",age:20}, //0
    {id:9,name:"B",age:22}, //1
    {id:3,name:"C",age:30}, //2
    {id:14,name:"D",age:15}, //3
    {id:2,name:"D",age:15}, //3
]
function findObjectByMax(arr,key){
    let max_id = arr[0][key]
    let position = 0;
    for(let i=0;i<arr.length;i++){
        if(max_id < arr[i][key]){
            max_id = arr[i][key]
            position = i;
        }
    }
    return arr[position];
}

// console.log(findObjectByMax(data,'age'));
// console.log(findObjectByMax(data,'id'));

console.table(data)

let maxObject = findObjectByMax(data,'id')
let maxId = Number(maxObject['id'])+1;

newObject = {id:maxId,name:'f',age:20};
data.push(newObject)

console.table(data)