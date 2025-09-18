const readline = require("readline");
const ProductController = require("./controller/productController");



const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface.question(
      ` Node Crud App:
        1. Insert(press 1)
        2. select(press 2)
        3. update(press 3)
        4. delete(press 4)
        5. search(press 5)
        6. exit(press y)
        Enter Your choice:`,
      function (choice) { 
        //start of interface
        switch (choice) {
        case "1":
        //insert Product
        interface.close();
        ProductController.createProduct();
        break;
        case "2":
        //select Product
        interface.close();
        
        const products = ProductController.showAllProducts();
        console.table(products);

        break;
        case "3":
        //update Product
        interface.close();
        ProductController.updateProduct(ProductController.showAllProducts());

        break;
        case "4":
        //delete Product
        interface.close();
        ProductController.deleteProduct(ProductController.showAllProducts());
        break;
        case "5":
        //search Product
        console.log(" search Product");
        
        break;
        case "y":
         interface.close();
         process.exit();
        break;
        default:
        console.log("Invalid Option Try Again");
  }
});

