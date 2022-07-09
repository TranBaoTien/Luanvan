import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './HeaderU.scss';

import {getAllSreach}from'../../services/productService'

import * as actions from "../../store/actions";
class HeaderU extends Component {
    constructor(props){
        super(props);
        this.state={
           arrproduct:[],
           key:''
        }
    }

    handleOnchangeInput=(event,id)=>{
     
        let copystate={...this.state};
        copystate[id]=event.target.value;
        this.setState({...copystate})
    
        }
        handlesreach=async()=>{
            try {
             console.log('kq state',this.state)
              let response=await getAllSreach(this.state);
              console.log('kq la',response)
              if(response)
              {
                  this.setState({
                      arrproduct:response
                  })
                 
              }
            
            } catch (e) {
               console.log(e) ;
            }  
          }
   
         
    render() {
        const { processLogoutCus,userInfocus,isLoggedInCUS } = this.props;
      // console.log('check',this.props.userInfocus)
        return (
            <React.Fragment>
           <div className='header-user-container'>
                <div className='header-user-content'>
                <div className='left'></div>
                <div className='center'>
                    <div className='left-header'>
                    <Link to='/home'><i className='fas fa-bars'></i></Link> 
                     <div className='header-user-logo'></div>

                    </div>
                    <div className='center-header'>
                      <div className='child-content'><Link to='/product'><b>Sản Phẩm</b></Link></div>
                      <div className='child-content'><b>Đơn Hàng</b></div>
                      <div className='child-content'><b>Chăm Sóc Khách Hàng</b></div>
                    
                      {isLoggedInCUS?<div  onClick={processLogoutCus}> <b>Đăng Xuất</b>
                      </div>:<Link to='/customerlogin'><b>Đăng Nhập</b></Link> } 
                      <div className='child-content'>
                      
                     
                      <input type='tex' placeholder='Search'   
                      onChange={(event)=>{this.handleOnchangeInput(event,"key")}}
                      value={this.state.key}/>
                      <button className='search'  onClick={()=>{this.handlesreach()}}><i class="fas fa-search"></i></button>
                      </div>
                     
                    </div>
                    <div className='right-header'>
                    <button className='content-header-1' ><Link to='/cart'><i className="fas fa-cart-plus"></i></Link></button>
                    <button className='content-header-1'> <Link to='/manager-user'><i className="far fa-address-card"></i></Link></button>
                   {isLoggedInCUS?<div className="btn btn-logout content-header-1" onClick={processLogoutCus}> <i className="fas fa-sign-out-alt"></i>
                   </div>:'' } 
                   
                    </div>
                </div>
                <div className='right'></div>
               
                </div>
           </div>
         
          
  
           </React.Fragment>
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
        processLogoutCus: () => dispatch(actions.processLogoutCus()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderU);
