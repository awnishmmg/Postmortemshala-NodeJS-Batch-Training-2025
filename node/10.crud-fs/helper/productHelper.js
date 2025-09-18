
const ProductHelper = {
   findProduct: function (product,key,target){
    let position = -1;
    for(let i=0;i<product.length;i++){
        if(product[i][key] == target){
            position = i;
            break;
        }
    }
    if(position > -1){
        return product[position];
    }
    return false;
},
findIndex :function (product,key,target){
    let position = -1;
    for(let i=0;i<product.length;i++){
        if(product[i][key] == target){
            position = i;
            break;
        }
    }
    return position;
} 
}

module.exports = ProductHelper;
