import React, { Component } from 'react';

import { connect } from 'react-redux';
import { editupdateUser} from '../../../../services/userService';

class Information extends Component {
  constructor(props){
    super(props);
    this.state={
     fullname:'',
     email:'',
     phone:'',
     id:'',
     idtype:''
     
    }}
    async componentDidMount() {
        
      const { systemMenuPath,isLoggedIn,userInfocus,isLoggedInCUS } = this.props;
    
    if(isLoggedInCUS){
      this.setState({
        fullname:userInfocus.fullname,
        email:userInfocus.email,
        phone:userInfocus.phone,
        id:userInfocus.id,
        idtype:userInfocus.idtype
       
      })
      
    }
  }
    handleOnchangeInput=(event,id)=>{

        let copystate={...this.state};
        copystate[id]=event.target.value;
        this.setState({...copystate})
        
        }
        checkInput=()=>{
          let isValid=true;
          let arrInput=['fullname','email','phone'];
          for(let i=0;i<arrInput.length;i++){
            if(!this.state[arrInput[i]] ){
              isValid=false;
              // alert('chua nhap: '+arrInput[i]);
              // break;
            }
          }
    return isValid;
        }
        handleAdd=()=>{
        
       let isValid= this.checkInput();
       if(isValid===true)
       { 
        this.props.createUser(this.state);
       
         if(this.props.errCode===0){
          this.toggle();
       
         }
       }
        }
       handleSave=async(user)=>{
        console.log(user)
          let isValid= this.checkInput();
          if(isValid===true)
          {
            await editupdateUser(user);
        
          }
      
           }
    render() {
        const { systemMenuPath,isLoggedIn,userInfocus,isLoggedInCUS } = this.props;
      
 
     
        return (
          <div>
          <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="text" class="form-control" id="inputemail" 
      placeholder="Email"   
       onChange={(event)=>{this.handleOnchangeInput(event,"email")}}
       value={this.state.email}
      />
    </div>
    <div class="form-group col-md-12">
      <label for="inputPassword4">FullName</label>
      <input type="text" class="form-control" id="inputfullname"
       placeholder="H??? v?? t??n"
       onChange={(event)=>{this.handleOnchangeInput(event,"fullname")}}
       value={this.state.fullname}
       />
    </div>
  </div>
 
 
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Phone</label>
      <input type="text" class="form-control" id="inputphone"
      value={'0'+this.state.phone}
       onChange={(event)=>{this.handleOnchangeInput(event,"phone")}}
       />
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">H???ng Th??nh Vi??n</label>
      <input type="text" class="form-control" id="inputhang" value={'Kh??ch H??ng'}/>
    </div>
  
  </div>
 
  <button type="submit" class="btn btn-primary"    onClick={()=>{this.handleSave(this.state)}}>C???p Nh???t</button>
</form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Information);
