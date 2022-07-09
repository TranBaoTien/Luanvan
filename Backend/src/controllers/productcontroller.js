
import db from '../models/index';
import CRUDProduct from '../services/CRUDProduct'


//  tạo Product
let postcreateProduct=async(req,res)=>{
    //xuat cai da nhap vao
     let data=await CRUDProduct.createNewProduct(req.body);
    return res.send(data);
}
//UPDATE Product theo id
let putupdateProduct=async(req,res)=>{
    
    let data=await CRUDProduct.updateProductData(req.body);
    return res.send(data);
}
//delete 
let postdeleteProduct=async(req,res)=>{
    //lay id chon tren duong link
    let Productid=req.body.id;
    if(Productid){
       let data= await CRUDProduct.postdeleteProduct(Productid);
        return res.send(data);
    }else{

        return res.send('khong co id can tim');
    }
}

let SearchProduct=async(req,res)=>{
   let key=req.body.key;
   console.log(req.body)
    let data=await CRUDProduct.SearchProduct(key);
  
   // return res.send({data: JSON.stringify(data)});
    return res.send(data);

}
//Lấy tất cả Product
let getAllProduct=async(req,res)=>{
   
        let data=await CRUDProduct.getAllProduct();

        return res.send(data);
   
}
let getAllProduct1=async(req,res)=>{
    let Productid=req.query.id;
    if(Productid){
        let data=await CRUDProduct.getAllProduct1(Productid);
        return res.send(data);
    }else{

        return res.status(200).json({
            errCode:2,
            product:[]
        });
    }
}

let getOneProduct=async(req,res)=>{
    
    let Productid=req.body.id;
    if(Productid){
        let data=await CRUDProduct.getOneProduct(Productid);
        return res.send(data);
    }else{

        return res.send('khong co id can tim');
    }
}
module.exports = {

    postcreateProduct:postcreateProduct,

    getAllProduct:getAllProduct,
    putupdateProduct:putupdateProduct,
    postdeleteProduct:postdeleteProduct,
    getOneProduct:getOneProduct,
    getAllProduct1:getAllProduct1,
    SearchProduct:SearchProduct
  
}
