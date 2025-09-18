const readline = require("node:readline");
const productModel = require("../model/productModel");
const productHelper = require("../helper/productHelper");
const ProductHelper = require("../helper/productHelper");

const ProductController = {
    createProduct: function(){  
      // start of interface.
            
    const Interface = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    Interface.question("Enter the Product Id:", (product_id) => {
      Interface.question("Enter the Product Name:", (product_name) => {
        Interface.question("Enter the Product Price:", (product_price) => {
          Interface.question("Enter the Product Qty:", (product_quantity) => {
            const productData = {
              product_id: Number(product_id),
              product_name: product_name,
              price: Number(product_price),
              product_quantity: product_quantity ? product_quantity : 0,
            };

            //call Model
            productModel.insert(productData);
            Interface.close();
          });
        });
      });
    });
      // end of Interface.

    },
    showAllProducts : function(){
      return productModel.select()
    },
    updateProduct : function(products){
    const Interface = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    Interface.question('Enter the Product ID:',function(product_id){
      const product = productHelper.findProduct(products,'product_id',parseInt(product_id));
      if(product==false){
         console.log('No Product Found with ID,',product_id);
         Interface.close();
      }

      if(product){
        Interface.question('Enter the Product Name:',function(product_name){
          Interface.question('Enter the Product price:',function(product_price){
            
            const UpdatedData = {
              product_name : product_name,
              price :  Number(product_price)

            }

            productModel.update(product_id,UpdatedData)
            Interface.close();

           });
        });
      }     
      
    });

    },
    deleteProduct: function(products){
    const Interface = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      Interface.question('Enter the Product ID:',function(product_id){
        const product = productHelper.findProduct(products,'product_id',parseInt(product_id));
      if(product==false){
         console.log('No Product Found with ID,',product_id,' hence cannot delete');
         Interface.close();
      }

      if(product){
         productModel.delete(product_id);
         Interface.close();
      }
     

      });

    }
}
module.exports = ProductController;



