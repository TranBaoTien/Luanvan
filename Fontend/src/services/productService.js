
import axios from '../axios'
const getAllimg=()=>{
    return axios.get('/get-allimg')
    ///get-oneproduct?id=${id}
}
const createimage=(data)=>{
    return axios.post('/post-createimg',data)
}

const deleteimage=(productid)=>{
   // console.log('is'+productid)
    return axios.post('/post-deleteimg',{id:productid})

    
}
const editimage=(data)=>{
    return axios.put('/put-updateimg',data)
}

const getPrice=()=>{
    return axios.get('/get-allprice')
    ///get-oneproduct?id=${id}
}
const createprice=(data)=>{
    return axios.post('/post-createprice',data)
}

const deletePrice=(productid)=>{
   // console.log('is'+productid)
    return axios.post('/post-deleteprice',{id:productid})

    
}
const editPrice=(data)=>{
    return axios.put('/put-updateprice',data)
}


const getAllProduct=()=>{
    return axios.get('/get-allproduct')
    ///get-oneproduct?id=${id}
}
const getAllProduct1=(inputid)=>{
    return axios.get(`/get-allproduct1?id=${inputid}`)
    ///get-oneproduct?id=${id}
}

const getOne=(proid)=>{

    return axios.get('/get-oneproduct',{id:proid})
}
const createNewproduct=(data)=>{
    return axios.post('/post-createproduct',data)
}

const deleteproduct=(productid)=>{
   // console.log('is'+productid)
    return axios.post('/post-deleteproduct',{id:productid})

}

const editupdateproduct=(data)=>{
    return axios.put('/put-updateproduct',data)
}

const getAllTypeProduct=()=>{
    return axios.get('/get-alltypeproduct')
    ///get-oneproduct?id=${id}
}
const getAllstatus=()=>{
    return axios.get('/get-allstatus')
    ///get-onedeliveri?id=${id}
}
const getAllSreach=(data)=>{
   console.log(data)
    return axios.get('/get-sreach',data)
  
}
export{getAllProduct1,getAllProduct,getOne,
    createNewproduct,deleteproduct,editupdateproduct,
    getAllimg,createimage,deleteimage,editimage,
    getPrice,createprice,deletePrice,editPrice,
    getAllTypeProduct,getAllstatus,getAllSreach
}