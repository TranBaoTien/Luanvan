import React, { Component } from 'react';

import { connect } from 'react-redux';

import './Footer.scss';
class FooterUser extends Component {

    render() {
  
        return (
          <div className='footer-user'>
          <section id="footer">
          <div className="container">
              <div className="row text-center text-xs-center text-sm-left text-md-left">
                  <div className="col-xs-12 col-sm-4 col-md-4">
                      <h5>Quick links</h5>
                      <ul className="list-unstyled quick-links">
                          <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</a></li>
                          <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>About</a></li>
                          <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                          <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                          <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Videos</a></li>
                      </ul>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4">
                      <h5>Quick links</h5>
                      <ul className="list-unstyled quick-links">
                          <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</a></li>
                          <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>About</a></li>
                          <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                          <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                          <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Videos</a></li>
                      </ul>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4">
                      <h5>Quick links</h5>
                      <ul className="list-unstyled quick-links">
                          <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</a></li>
                          <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>About</a></li>
                          <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                          <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                          <li><a href="https://wwwe.sunlimetech.com" title="Design and developed by"><i className="fa fa-angle-double-right"></i>Imprint</a></li>
                      </ul>
                  </div>
              </div>
              <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                      <ul className="list-unstyled list-inline social text-center">
                          <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-facebook"></i></a></li>
                          <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-twitter"></i></a></li>
                          <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-instagram"></i></a></li>
                          <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-google-plus"></i></a></li>
                          <li className="list-inline-item"><a href="javascript:void();" target="_blank"><i className="fa fa-envelope"></i></a></li>
                      </ul>
                  </div>
                  
              </div>	
              <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                     
                      <p className="h6">&copy;2022 MyXiaomi.<a className="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">!80 Cao L??? Ph?????ng 4 Qu???n 8 TPHCM</a></p>
                  </div>
                  
              </div>	
          </div>
      </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(FooterUser);
