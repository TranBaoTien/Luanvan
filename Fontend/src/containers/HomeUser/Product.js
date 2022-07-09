import React, { Component } from 'react'
import {getAllProduct,getAllimg,getPrice} from '../../services/productService'
import'./Product.scss'
import HeaderU from './HeaderU';
import FooterUser from './FooterUser';
import{deletacart,showcart,addTocart} from '../HomeUser/Section/CRUDCart'
export default class Product extends Component {
    constructor(props){
        super(props);
        this.state={
           arrproduct:[],
           arrPrice:[]
        }
    }
    async componentDidMount() {
      
        let pri=await getAllProduct();
        let price=await getPrice();
        this.setState({
          arrproduct:pri,
          arrPrice:price
        })
    }
    handledetailpro=(product)=>{
        //console.log('product',product);
        this.props.history.push(`/product/${product.id}`);
      
       }
       addTocart=async(id)=>{
        await addTocart(id);
    }
    
  render() {
    let pro=this.state.arrproduct;
    let arrprice=this.state.arrPrice;
    return (
      <div>
      <HeaderU/>
      <div className='header-banner'></div>
        <section className='product'>
            <div className='container'>
                <div className='row'>
                    {pro.map((item,index)=>{
                        return(<div className='col-xl-3 col-lg-4 col-md-6 col sm-12 product-item' key={index} >
                                <div className='card card-pro-pro'>
                                <img src={item.img} className='card-img-top'></img>
                                <div className='card-body'>
                                    <h4 className='card-title'>{item.name}</h4>
                                    {arrprice && arrprice.map((itemprice,index1)=>{
                                        if(item.id==itemprice.idpro){
                                
                                       
                                        return( 
                                            <h3 >
                                            <span className="new-price new-price-2">
                                            {new Intl.NumberFormat('vi-VN',
                                            {style: 'decimal',decimal: 'VND'}).format(itemprice.price)+ ' VNĐ'}</span>
                                              
                                            </h3>
                                            ); }
                                       })}
                                </div>
                                <div className='card-body card-center' >
                                <button type="button" class="btn btn-primary" onClick={()=>this.addTocart(item.id)}>Đặt Hàng</button>
                                <button type="button" class="btn btn-info" onClick={()=>this.handledetailpro(item)}>Chi Tiết</button>
                                <button type="button" class="btn btn-success" onClick={()=>this.addTocart(item.id)}>Giỏ Hàng</button>
                                </div> 
                               
                                </div>
                            </div>)
                    })}
                </div>
            </div>
        </section>
      
      <FooterUser/>
      </div>
    )
  }
}
