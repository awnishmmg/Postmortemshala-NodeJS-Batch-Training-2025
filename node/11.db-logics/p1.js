// find the max element in the array 
let arr = [5,10,3,2,7,4,50,3,2,];

max_no = arr[0];

function findMax(arr){
    for(let i=0;i<arr.length;i++){
        if(max_no < arr[i]){
            max_no = arr[i]
        }
    }
    return max_no;
}



console.log(findMax(arr));
