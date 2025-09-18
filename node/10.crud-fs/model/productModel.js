const config = require("../config");
const fs = require("node:fs");
const productSchema = require("../schema/productschema");
const productValidator = require("../validator");
const productHelper = require('../helper/productHelper');


productValidator.createSchema(productSchema);

const productModel = {
  collectionName: "products",
  insert: function (formData) {
    const dbJson = fs.readFileSync(config.dbPath, "utf-8");
    const dbObject = dbJson ? JSON.parse(dbJson) : {};
    if (!Array.isArray(dbObject[productModel.collectionName])) {
      dbObject[productModel.collectionName] = [];
    }
    dbObject[productModel.collectionName].push(formData);

    try {
      productValidator.validate(formData);
      if (productValidator.hasError()) {
        console.log(productValidator.getErrors());
        return false;
      } else {
        fs.writeFileSync(config.dbPath, JSON.stringify(dbObject), "utf-8");
        console.log("Data Inserted Successfully");
        return true;
      }
    } catch (error) {
      console.log("Insert Error", error);
      return false;
    }
  },
  update: function (product_id,UpdatedData) {

    const index = productHelper.findIndex(productModel.select(),'product_id',product_id)

     const dbJson = fs.readFileSync(config.dbPath, "utf-8");
     const dbObject = dbJson ? JSON.parse(dbJson) : {};

     if(Array.isArray(dbObject[productModel.collectionName])){
      dbObject[productModel.collectionName][index]['product_name'] = UpdatedData['product_name']
      dbObject[productModel.collectionName][index]['price'] = UpdatedData['price']
     }

     //Schema validate

     UpdatedData['product_id'] = Number(product_id);

     try {
      productValidator.validate(UpdatedData);
      if (productValidator.hasError()) {
        console.log(productValidator.getErrors());
        return false;
      } else {
        fs.writeFileSync(config.dbPath, JSON.stringify(dbObject), "utf-8");
        console.log("Data Updated Successfully");
        return true;
      }
    } catch (error) {
      console.log("Update Error", error);
      return false;
    }

  },
  delete: function (product_id) {
    const index = productHelper.findIndex(productModel.select(),'product_id',product_id)
     const dbJson = fs.readFileSync(config.dbPath, "utf-8");
     const dbObject = dbJson ? JSON.parse(dbJson) : {};
     if(Array.isArray(dbObject[productModel.collectionName])){
      dbObject[productModel.collectionName].splice(index,1);
     }
     try {
    
        fs.writeFileSync(config.dbPath, JSON.stringify(dbObject), "utf-8");
        console.log("Data Deleted Successfully");
        return true;
    } catch (error) {
      console.log("Deleted Error", error);
      return false;
    }

  },
  select: function () {
    const dbJson = fs.readFileSync(config.dbPath,"utf-8");
    const dbObject = dbJson ? JSON.parse(dbJson) : {};
    const productData = dbObject[productModel.collectionName];
    return productData;

  },
};

module.exports = productModel;
