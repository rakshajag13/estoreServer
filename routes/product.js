const express = require("express");
const product = express.Router();
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "admin123",
  database: "estore",
  port: 3306,
  multipleStatements: true,
});

product.get("/productCategories", (req, res) => {
    let categoryData;
        pool.query("SElect * from categories",(err,categories)=>{
            if(err){
            categoryData=err;
            res.status(200).send(categoryData);
            }
            categoryData=categories;
            res.status(200).send(categoryData);
        })
 
});

product.get("/getProducts",(req,res)=>{
  let productData;
  pool.query("SElect * from products",(err,rows)=>{
    if(err){
    res.status(200).send(err);
    }
    productData=rows;
    res.status(200).send(productData);
})
})
module.exports=product;
