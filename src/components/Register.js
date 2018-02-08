import React, { Component } from 'react'
import { reduxForm, Field } from "redux-form";
import {required,emailField,passwordField} from './Forms/InputFields'
import toggleOpen from '../decorators/toggleOpen'

class Register extends Component {
  
  render() {
    const { active, toggle, handleSubmit, pristine, reset, submitting } = this.props;
    const loginForm = <form onSubmit={handleSubmit} >
      <div className="col-md-12 col-sm-12 col-lg-12">
        <Field name="email" component={emailField} validate={required}/>
        <Field name="password" component={passwordField} validate={required}/>
      </div>
      <button disabled={pristine || submitting} className="loginBtn">Login</button>
      <p className='forgotPassword'>Forgot Password?</p>
      <i onClick={this.props.close} className="fa fa-window-close-o fa-2x" aria-hidden="true"></i>
    </form>
    const singInForm = <form onSubmit={handleSubmit} >
      <div className="col-md-12 col-sm-12 col-lg-12">
        <Field name="email" component={emailField} validate={required}/>
        <Field name="password" component={passwordField} validate={required}/>
      </div>
      <button disabled={pristine || submitting} className="loginBtn">Sign In</button>
      <i onClick={this.props.close} className="fa fa-window-close-o fa-2x" aria-hidden="true"></i>
    </form> 
    return (
      <div className="text-center" id='registerContainer' > 
        {active ? 
            <button className='logButtonOff' onClick={toggle}>LOGIN</button> : 
          <button className='logButtonOn'>LOGIN</button>}
        {!active ? 
            <button className='logButtonOff' onClick={toggle}>SIGN IN</button> : 
          <button className='logButtonOn'>SIGN IN</button>}
        {!active ? loginForm : singInForm}
      </div>
    )
  }
}

Register = reduxForm({
  form:'registerform'
})(Register)
export default toggleOpen(Register) 