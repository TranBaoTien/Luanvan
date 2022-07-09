import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Type.scss';

import Slider from "react-slick"
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
 import imageproduct from '../../../assets/xiaomi-mi-11-lite-5g-1_12.webp';
 import {getAllProduct,getAllimg,getPrice,getAllTypeProduct} from '../../../services/productService'
import {withRouter}from 'react-router'
import { Table } from 'reactstrap';
 

class Type extends Component {
    constructor(props){
        super(props);
        this.state={
         arrUsers:[],
         arrIMG:[],
         arrPrice:[],
         arrType:[],
         isOpenModel:false,
         isOpeneditModel:false,
         errmessage:'',
         errCode:2,
         userEdit:{},
        productEdit:{}
        }
    }
    async componentDidMount() {
        let response=await getAllProduct();
        let imgproduct=await getAllimg();
        let price=await getPrice();
        let type=await getAllTypeProduct();
       // console.log(this.state.cart)
        if(response){
            this.setState({
                arrUsers:response,
                arrIMG:imgproduct,
                arrPrice:price,
                arrType:type
            })
        }
      
    }

    handledetailpro=(product)=>{
       //console.log('product',product);
       this.props.history.push(`/product/${product.id}`);
     
      }
    
    render() {
        let arrUsers=this.state.arrUsers;
        let arrIMG=this.state.arrIMG;
        let arrPrice=this.state.arrPrice;
        let arrtype=this.state.arrType;
        let settings=this.props.settings;
        let imglistpro=[
          'https://i.postimg.cc/DZr3VffF/t-i-xu-ng-2-3-1.webp',
          'https://i.postimg.cc/C5PNcKrm/002.jpg',
          'https://i.postimg.cc/8CRFKGBm/MU7-T2-GEO-US.webp',
          'https://i.postimg.cc/8CRFKGBm/MU7-T2-GEO-US.webp',
          'https://i.postimg.cc/HLccQ5jR/f9279f5617d551209892cea511466896.jpg'
      
      ]
          return (
           <div className='section' >
           <div className='titel-list '>
           {arrtype.map((item,index)=>{
            return(
               
            <div className="card product-list-list">
             <img className="card-img-top" 
             src={imglistpro[index]} />
               <div className="card-body">
                 <h5 className="card-title ">{item.name}</h5>
            </div>  </div> )
           })}
           </div>
          
           <div className='titel-user'>Điện Thoại {" "}<i class="fas fa-mobile-alt"></i></div>
    
           <Slider {...settings}>
           {arrUsers && arrUsers.map((item,index)=>{
         if(item.idtype==1){   
                  return (
                <div>
                <div className='section-product'   onClick={()=>this.handledetailpro(item)}>
             
               
                <div className="card product-list-slider" style={{width:'rem'}}>
                <img className="card-img-top" src={item.img} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    {arrPrice.map((price,index)=>{
                      if(item.id==price.idpro){
                      return(  <p className="card-text"> 
                      
                      <h5>                <span className="new-price new-price-2">
                      {new Intl.NumberFormat('vi-VN',
                      {style: 'decimal',decimal: 'VND'}).format(price.price)+ ' VNĐ'}</span>
                        </h5></p>)}
                    })}
                  
                  </div></div></div></div>
               
           )}
               }) } 
         </Slider>
         <div className='titel-user'>Tai Nghe{" "}<i class="fas fa-music"></i></div>
         <Slider {...settings}>
         {arrUsers && arrUsers.map((item,index)=>{
       if(item.idtype==2){   
                return (
              <div>
              <div className='section-product'   onClick={()=>this.handledetailpro(item)}>
           
             
              <div className="card product-list-slider" style={{width:'rem'}}>
              <img className="card-img-top" src={item.img} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  {arrPrice.map((price,index)=>{
                    if(item.id==price.idpro){
                    return(  <p className="card-text"> <h5>
                    
                    <span className="new-price new-price-2">
                    {new Intl.NumberFormat('vi-VN',
                    {style: 'decimal',decimal: 'VND'}).format(price.price)+ ' VNĐ'}</span>
                      </h5></p>)}
                  })}
                
                </div></div></div></div>
             
         )}
             }) } 
       </Slider>
       <div className='titel-user'>Pin Dự Phòng {" "}<i class="fas fa-battery-full"></i></div>
       <Slider {...settings}>
       {arrUsers && arrUsers.map((item,index)=>{
     if(item.idtype==3){   
              return (
            <div>
            <div className='section-product'   onClick={()=>this.handledetailpro(item)}>
         
           
            <div className="card product-list-slider" style={{width:'rem'}}>
            <img className="card-img-top" src={item.img} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                {arrPrice.map((price,index)=>{
                  if(item.id==price.idpro){
                  return(  <p className="card-text"> <h5>
                <span className="new-price new-price-2">
                  {new Intl.NumberFormat('vi-VN',
                  {style: 'decimal',decimal: 'VND'}).format(price.price)+ ' VNĐ'}</span>
                    
                  
                  </h5></p>)}
                })}
              
              </div></div></div></div>
           
       )}
           }) } 
     </Slider>
     <div className='titel-user'>-</div>
           </div>
           
          
          );
    }

}




const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        isLoggedInCUS: state.user.isLoggedInCUS,
    };
};

const mapDispatchToProps = dispatch => {
    return {
      
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Type));
