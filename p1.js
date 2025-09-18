// Array of keys and values to Object conversion using loop.

let k = ['name','class','marks']
let v = ['awnish','Btech',70]
let Obj = {}

function makeObject(k,v,obj,i=0){
	if(i == k.length){
		return obj
	}
	let key = k[i]
	let value = v[i]
	obj[key] = value 
	return makeObject(k,v,obj,i+1)
}

let result = makeObject(k,v,Obj)
console.log(result)




