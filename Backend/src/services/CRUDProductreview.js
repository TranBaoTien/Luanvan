import bcrypt from 'bcryptjs';
import db from '../models/index'
const salt=bcrypt.genSaltSync(10);
//tao Productreview
let createNewProductreview=async(data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
                   let Productreview= await db.Productreview.create({
                    idoder: data.idoder,
                    iduser: data.iduser,
                    start:data.start,
                    cmt:data.cmt,
                    edit: data.edit
                    })
                    resolve(
                        {
                            errCode:0,
                            message:"Create Thành Công",
                    })}
        catch (e) {
            reject(e);
        } })
}

let getAllProductreview=async(data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let Productreviews=db.Productreview.findAll(
                {raw:true}
                );
        
            resolve(Productreviews);
        } catch (e) {
            reject(e);
        }

    })
}

let getOneProductreview=async(Productreviewid)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let Productreviews=db.Productreview.findOne({  where:{id:Productreviewid},raw:true});
            resolve(Productreviews);
        } catch (e) {
            reject(e);
        }

    })
}


let updateProductreviewData=(data,Productreviewid)=>{
    return new Promise(async(resolve,reject)=>{
        try {
           
          let Productreview=await db.Productreview.findOne({
              where:{id:Productreviewid}
          })
          if(Productreview){
           
            Productreview.idoder= data.idoder,
            Productreview.iduser=data.iduser,
            Productreview.start=data.start,
            Productreview.cmt=data.cmt,
            Productreview.edit=data.edit
           
            await Productreview.save();
            resolve({
                errCode:0,
                message:"Update thành công"
        });
          }else{
              resolve({
                errCode:20,
                message:"Sai Productreview"
        });
          }
          
            
        } catch (e) {
            reject(e);
        }

    })
}
let postdeleteProductreview=(Productreviewid)=>{
    return new Promise(async(resolve,reject)=>{
        try {
          let Productreview=await db.Productreview.findOne({
              where:{id:Productreviewid}
          })
          if(Productreview){
            await Productreview.destroy();
            resolve({
                errCode:0,
                message:"Delete thành công"
        });//nhu return
          }else{
              resolve({
                errCode:20,
                message:"Không có id cần xoá"
        });
          }
          
            
        } catch (e) {
            reject(e);
        }

    })

}



module.exports={
createNewProductreview:createNewProductreview,
getAllProductreview:getAllProductreview,

updateProductreviewData:updateProductreviewData,
postdeleteProductreview:postdeleteProductreview,
getOneProductreview:getOneProductreview,
};