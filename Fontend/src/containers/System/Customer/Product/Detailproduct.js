import React, { Component } from 'react';
import { connect } from "react-redux";
import FooterUser from '../../../HomeUser/FooterUser';
import Slider from "react-slick"
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
 import './Detailproduct.scss'
import Modeldetailproduct from '../../../HomeUser/Section/Modeldetailproduct';
import {getAllProduct,getAllimg,getOne,getPrice,getAllProduct1,editupdateproduct} from '../../../../services/productService'
import{deletacart,showcart,addTocart} from '../../../HomeUser/Section/CRUDCart.js'
import HeaderU from '../../../HomeUser/HeaderU';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background:" black" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

class Detailproduct extends Component {
    constructor(props){
        super(props);
        this.state={
         arrUsers:[],
         arrIMG:[],
         arrPrice:[],
         errmessage:'',
        productEdit:{},
        cart:[]
        }
    }
    async componentDidMount() {
        let response=await getAllProduct();
       let res=await getAllimg();
       let pri=await getPrice();
      
        if(response){
            this.setState({
                arrUsers:response,
                arrIMG:res,
                arrPrice:pri,
                isOpenModel:false,
                isOpeneditModel:false,
                errmessage:'',
                errCode:2,
                userEdit:{},
                productEdit:{}
            })
        }
     
      
    }

deletacart=async(id)=>{
    let storage=localStorage.getItem('cart')
    if(storage){
       this.state.cart=JSON.parse(storage)
    }
    this.state.cart= this.state.cart.filter(item=>item.product.id!=id)
    localStorage.setItem('cart',JSON.stringify(this.state.cart))
 this.showcart();
}

 addTocart=async(id)=>{
    await addTocart(id);
}

toggleModal=()=>{
    this.setState({
        isOpenModel:!this.state.isOpenModel
    })
}
toggleEditModal=()=>{
    this.setState({
        isOpeneditModel:!this.state.isOpeneditModel
    })
}
handleEdit=async(product)=>{
    // console.log('product',product)
    this.setState({
        isOpeneditModel:true,
        productEdit:product
    })
    }
    // editproduct=async(product)=>{
    //     try {
    //        let rs= await editupdateproduct(product);
    //        if(rs)
    //         {
    //             this.setState({
    //                 errmessage:rs.message,
    //                 errCode:rs.errCode,
    //                 isOpeneditModel:false
    //             })
    //             this.handegetall();
    //         }
    //     } catch (error) {
            
    //     }
    //     }
    render() {
       
      
//console.log(this.props.match.params)
let detail=this.props.match.params.id;
let arrPro=this.state.arrUsers;
let arrImg=this.state.arrIMG;
let arrprice=this.state.arrPrice;
//console.log('detail sv'+detail)
return (
    <div>
    { this.state.isOpeneditModel && <Modeldetailproduct
        isOpen={this.state.isOpeneditModel}
        toggleModal={this.toggleEditModal}
        product={this.state.productEdit}
        // editproduct={this.editproduct}
        // errmessage={this.state.errmessage}
        // errCode={this.state.errCode}
        />}

<HeaderU/>
    {arrPro && arrPro.map((item,index)=>{
         if(item.id==detail){
            return (
                <div className='section-1'>
              
               <div className='div-detail-left'>
                <div className='div-detail-div'>
                  <div><img src={item.img}/></div>
                  <div>  <Slider settings={
                     {dots: true,
                    infinite: true,
                    speed: 500,
              
                    nextArrow: <SampleNextArrow  />,
                    prevArrow: <SamplePrevArrow />}}
                    >
                    {arrImg && arrImg.map((itemimg,index)=>{
                      if(itemimg.idpro===item.id)
                      { 
                        return (
                            <div className='slider-detail'>
                            <img src={itemimg.name} />
                            </div>
                                
                        );}
                            }) }
                    </Slider></div>
                </div>
                <div>
                  <div className='detail-top'>
              
                <div  className='detail-top-1'>
                <div><h3><b>{item.name}</b></h3></div>
                <div><h5>Gi?? Khuy???n m??i</h5></div>
                {arrprice && arrprice.map((itemprice,index1)=>{
                  if(item.id==itemprice.idpro){

                
                  return( <div>
                      
                      <div><h3><b>                <span className="new-price new-price-2">
                      {new Intl.NumberFormat('vi-VN',
                      {style: 'decimal',decimal: 'VND'}).format(itemprice.price)+ ' VN??'}</span>
                        </b></h3></div>
                      <div><h3>Dung l?????ng</h3></div>
                      <div><h3>{itemprice.data}</h3></div>
                      </div>); }
                })}
                
              
                <div><b><h3>Khuy???n m??i</h3></b></div>
                  <div><h5>Gi?? v?? khuy???n m??i d??? ki???n ??p d???ng ?????n 23:00 24/06</h5></div>
                  <div><b><h5>T???ng Phi???u mua h??ng gi???m 10% Tai nghe t??? 1.5 tri???u (gi???m t???i ??a 1 tri???u)</h5></b></div>
                  <div><b><h5> Gi???m ?????n 1,500,000?? khi tham gia thu c?? ?????i m???i</h5></b></div>
                  <div><b><h5>Gi???m 50% gi?? g??i c?????c 1 n??m (Vina350/Vina500) cho Sim VinaPhone tr??? sau (Tr??? gi?? ?????n 3 tri???u)</h5></b></div>
                  <div><b><h5>Gi???m ?????n 500.000?? khi thanh to??n qu??t QRcode qua App c???a ng??n h??ng</h5></b></div>
                  <div><b><h6>(*) Gi?? ho???c khuy???n m??i kh??ng ??p d???ng tr??? g??p l??i su???t ?????c bi???t (0%, 0.5%, 1%)</h6></b></div>
                
              <div className='oder-pro'>
              <div className='oder1'><button><b>Mua Ngay</b></button></div>
              <div className='oder2'>
              <button onClick={()=>this.handleEdit(item)}>Xem chi ti???t</button>
              <button onClick={()=>this.addTocart(item.id)}>?????t H??ng</button>
              </div>
              
              </div>
                </div>
                
                  </div>
                
                </div>
              
               
               
               
               
               
                </div>
            
          
       </div>            
           );
         }
      
           }) }
<FooterUser/>
    </div>
  );
    }
}


export const addTocart1=async(id)=>{
    let carts=[];
    let storage=localStorage.getItem('cart')
    if(storage){
       carts=JSON.parse(storage)
    }
      let product=await getAllProduct1(id);
      let item=this.state.cart.find(c=>c.product.id==id);
      if(item){
        item.quatity+=1;
      }else{
         carts.push({product,quatity:1})
      }
    localStorage.setItem('cart',JSON.stringify(carts))
   this.showcart(carts);
//    this.setState({
//      cart:this.state.cart
      
//   })
   
  }
 export const showcart1=async(shoppingcart)=>{
    let cartBody=document.getElementById('cart-body')
    cartBody.innerHTML=''
    shoppingcart.map(item=>{
      cartBody.innerHTML+=
      `<div class='tb-cart-1'>
      <div class='tb-cart-2'><h1>${item.product.name}</h1></div>
      <div class='tb-cart-2'><h1>${item.quatity}</h1></div>
      <div class='tb-cart-2'><h1>${item.quatity}</h1></div>
      </div>`
      
    })
}

const mapStateToProps = state => {
    return {
        DetailproductMenuPath: state.app.DetailproductMenuPath,
        isLoggedIn: state.user.isLoggedI
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detailproduct);
