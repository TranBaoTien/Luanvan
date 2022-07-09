import React, { Component } from 'react';
import FooterUser from '../FooterUser';
import { connect } from 'react-redux';
import './detailProduct.scss';
import './Cart.scss'
import{deletacart,showcart,addTocart,showcart1,updatecart,updatecartminus} from './CRUDCart.js'
import {getAllProduct,getAllimg,getOne,getPrice,getAllProduct1,editupdateproduct} from '../../../services/productService'
import HeaderU from '../HeaderU';
import {createoder}from'../../../services/oderSevice'
class detailProduct extends Component {
    constructor(props){
        super(props);
        this.state={
            cart:[],
            arrPrice:[],
            tong:0,
            discounts:0,
            address:'',
            iduser:null,
            note:'',
            idpay:null,
            idvoucher:null,
            quatity:null,
            namepro:'',
            price:null,
            idpro:null,
            idoder:null,
            summoney:null,

        }
    }
    async componentDidMount() {
        await showcart1();
        let cart1=await showcart1();
        let pri=await getPrice();
        this.setState({
            cart:cart1,
            arrPrice:pri
        })
      //console.log(this.state.cart)
    }
    handleOnchangeInput=(event,id)=>{
     
      let copystate={...this.state};
      copystate[id]=event.target.value;
      this.setState({...copystate})
      }
    handeladd=async()=>{
 
      console.log(this.state)
      // try {
      //   let response=await createoder(this.state);
      //   if(response)
      //   {
      //       this.setState({
      //           errmessage:response.message,
      //           errCode:response.errCode,
      //           //isOpenModel:false
      //       })
      //       this.handegetall();
      //   }
      //   //console.log('kq la',response)
      // } catch (e) {
      //    console.log(e) ;
      // }  
    }
    
    deletecart=(id)=>{
       let cart=  deletacart(id);
       this.setState({
        cart:cart
       })

    }
    updateCart=async(id)=>{
       let cart= await updatecart(id);
       this.setState({
        cart:cart
        
    })
    }
    updateCartminus=async(id)=>{
      
        let cart= await updatecartminus(id);
        this.setState({
         cart:cart
         
     })
     }
    render() {  const { processLogoutCus,userInfocus,isLoggedInCUS } = this.props;

        let cart=this.state.cart;
        let arrprice=this.state.arrPrice;
        let tong=this.state.tong
        let giamgia=this.state.discounts;
        return (
          <div>
          <HeaderU/>
        
 <div className="user-container">
{cart.map(item=>{
    
    return(

<div>
        <div className='ala-cart'>
            <div className='ala-cart-left'>
                <img src={item.product.img} className='card-img-top'></img>
            </div>
            <div className='ala-cart-center'>
                <div > <h7>{item.product.name}</h7></div>
               

            </div>
            <div className='ala-cart-right'>
                <div>
                {arrprice && arrprice.map((itemprice,index1)=>{
                    if(item.product.id==itemprice.idpro){
                    return( 
                      <div  ><h7>                <span className="new-price new-price-2">
                      {new Intl.NumberFormat('vi-VN',
                      {style: 'decimal',decimal: 'VND'}).format(itemprice.price)+ ' VNĐ'}</span>
                        </h7></div> 
                        ); }})}
                </div>
                <div>
                <button type="button" class="btn btn-outline-success"
                
                onClick={()=>this.updateCartminus(item.product.id)}><i class="fas fa-minus"></i></button>
                {" "}<h7>{item.quatity}</h7>{" "}
                <button type="button" class="btn btn-outline-success"  onClick={()=>this.updateCart(item.product.id)}><i class="fas fa-plus"></i></button>
                </div>
            </div>
            <div className='ala-cart-right-right'>
            <div className='delete' onClick={()=>this.deletecart(item.product.id)}>
            <i className="fas fa-trash"/>
            </div>
            
            </div>
        </div>
        <div className='summoney'>
        <div className='summoney1'></div>
        <div className='summoney2'>
        {arrprice && arrprice.map((itemprice,index1)=>{
            if(item.product.id==itemprice.idpro){
              tong+=itemprice.price*item.quatity;
          
            return( 
                <></
                >
                ); }})}
            
        </div>
        </div>
        
    </div>

    ) 

   })}
   <div className='thongtinkh-thnahtoan'>
   
   <div className='thongtinkh1'>
   <div class="col-auto">
   <label class="sr-only" for="inlineFormInputGroup">Voucher</label>
   <div class="input-group mb-2">
     <div class="input-group-prepend">
       <div class="input-group-text">@</div>
     </div>
     <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Voucher"/>
   </div>
 </div>
   </div>
   
   <div className='tinhtien1'><h3>Thanh Toán</h3>
   <table class="table">

  <tbody>
    <tr>
      <th scope="row">Tạm Tính</th>
      <td>                <span className="new-price new-price-2">
      {new Intl.NumberFormat('vi-VN',
      {style: 'decimal',decimal: 'VND'}).format(tong)+ ' VNĐ'}</span>
        </td>
     
    </tr>
    <tr>
      <th scope="row">Giảm Giá</th>
      <td>{giamgia} VNĐ</td>
      
    </tr>
    <tr>
      <th scope="row">Tổng Cộng</th>
      
        <td   >
        <span className="new-price new-price-2">
        {new Intl.NumberFormat('vi-VN',
        {style: 'decimal',decimal: 'VND'}).format(tong-tong*giamgia)+ ' VNĐ'}</span>
          
        </td>
     
    </tr>
  </tbody>
</table>
   
   </div></div>
   
   
   <div className='thongtinkh'>
  
   <div><b>Thông tin khách hàng</b></div>
   <div class="form-check form-check-inline">
   <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
   <label class="form-check-label" for="inlineRadio1">Anh</label>
 </div>
 <div class="form-check form-check-inline">
   <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
   <label class="form-check-label" for="inlineRadio2">Chị</label>
 </div>
   <form>
     <div class="form-row " style={{display:'!flex'}}>
       <div class="col">
         <input type="text" class="form-control" placeholder="Họ và Tên"
          value={isLoggedInCUS?userInfocus.fullname:''}
         
          />
       </div>
       <div class="col">
         <input type="text" class="form-control" placeholder="Số điện thoại" value={isLoggedInCUS?'0'+userInfocus.phone:''} />
       </div>
     </div>
   </form>
   </div>
   <div className='thongtinkh'>
   <div><b>Chọn hình giao hàng</b></div>
   <div class="form-group col-md-16">

    <div class="form-row">
  
   <div class="form-group col-md-6">
  
     <select id="inputStatetinh" class="form-control">
       <option selected>Tỉnh Thành...</option>
       <option>Hà Nội</option>
       <option>Hồ Chí Minh</option>
     </select>
   </div>
   <div class="form-group col-md-6">
  
   <select id="inputStatequan" class="form-control">
     <option selected>Quận Huyện...</option>
     <option>...</option>
   </select>
 </div>
 </div>
 
 <div class="form-row">
  
   <div class="form-group col-md-6">
  
     <select id="inputStatephuong" class="form-control">
       <option selected>Phường xã...</option>
       <option>...</option>
     </select>
   </div>
   <div class="form-group col-md-6">
   <input type="text" class="form-control" placeholder="Số nhà, tên đường"  />
 </div>
 </div>
 <div class="form-row">
 <div class="form-group col-md-12">
 <input type="text" class="form-control" placeholder="Ghi chú(nếu có)"  />
</div>
</div>
</div>
   </div>
   <div className='thongtinkh'> 
 
   <button type="button" class="btn btn-primary btn-lg btn-block tt-xx" onClick={()=>{this.handeladd()}}>
   Đặt Hàng</button>
  
   </div>
   

</div>

      <FooterUser/>
          </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedInCUS: state.user.isLoggedInCUS,
        userInfocus:state.user.userInfocus
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(detailProduct);
