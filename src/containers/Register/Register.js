import React, { Component, useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import * as $ from 'jquery';
import firebase from "../../firebase";

class Register extends Component {
    componentDidMount () {
    	$(document).ready(function () {

      $("#valPhone").bind({
        keydown: function (e) {
        	console.log(e.which)
        	console.log(e.shiftKey)
          if (e.shiftKey === true) {

            if (e.which == 9 || e.which == 187) {
              return true;
            }
            return false;
          }
          if (e.which > 57) {
            return false;
          }

          if (e.which == 32) {
            return false;
          }
          return true;
        }
      });
    });
    }

    constructor(props){
    super(props);

    this.state = {
      username: '',
      email: '',
	  phone: '',
	  address: '',
	  password: '',
	  isValidUsername: '',
 	  isValidPassword: '',
 	  isValidConfirmPassword: '',
 	  isValidEmail:'',
 	  isValidPhone:'',
 	  isValidAddress:'',
 	  errorUsername:'',
 	  errorPassword:'',
 	  errorCPassword:'',
 	  errorEmail:'',
 	  errorPhone:'',
 	  errorAddress:''
    }
  }


    render () {
	    const ContactForm = () =>{
	    	const initialFieldValues = {
	    		username: '',
	    		mobile: '',
	    		address: '',
	    		password: ''
	    	}
	    }

	    

	    const handlePassword = e =>{
	    	const re = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
    		if(re.test(e.target.value) == true){
    			return this.setState({
    				password:e.target.value,
    				isValidPassword:"is-valid",
    				errorPassword:''
    			})
    		}
    		else{
    			return this.setState({
    				isValidPassword:"is-invalid",
    				errorPassword:'Must be one capital letter, small letter, number and symbol'
    			})
    		}
	    }

	    const handleUsername = e =>{
	    	const re = new RegExp("^.{3,}$");
    		if(re.test(e.target.value) == true){
    			return this.setState({
    				username:e.target.value,
    				isValidUsername:"is-valid",
    				errorUsername:''
    			})
    		}
    		else{
    			return this.setState({
    				isValidUsername:"is-invalid",
    				errorUsername:'Must be at least 3 in length'
    			})
    		}
	    }

	    const handleEmail = e =>{
	    	const re = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    		if(re.test(e.target.value) == true){
    			return this.setState({
    				email:e.target.value,
    				isValidEmail:"is-valid",
    				errorEmail: ""
    			})
    		}
    		else{
    			return this.setState({
    				isValidEmail:"is-invalid",
    				errorEmail:"Must be one @ and ."
    			})
    		}
	    }

	    const handleConfirmPassword = e =>{
    		 if(e.target.value == this.state.password && e.target.value !== ''){
    		 	return this.setState({
    		 		isValidConfirmPassword:"is-valid",
    		 		errorCPassword:''
    		 	})
    		 }
    		 else if(e.target.value == ''){
    		 	return this.setState({
    		 		isValidConfirmPassword:"is-invalid",
    		 		errorCPassword:"Confirm password must be filled"
    		 	})
    		 }
    		 else{
    		 	return this.setState({
    		 		isValidConfirmPassword:"is-invalid",
    		 		errorCPassword:"Password doesn't same to the password"
    		 	})
    		 }
	    }

	    const handleAddress = e =>{
	    	if(e.target.value.length < 6){
	    		return this.setState({
	    			address:e.target.value,
	    			isValidAddress:"is-invalid",
	    			errorAddress:'Must be at least 6 in length'
	    		})
	    	}
	    	else{
	    		return this.setState({
	    			isValidAddress:"is-valid",
	    			errorAddress:''
	    		})
	    	}
	    }

	    const handlePhone = e =>{
	    	if(e.target.value.length < 8){
	    		return this.setState({
	    			phone:e.target.value,
	    			isValidPhone:"is-invalid",
	    			errorPhone:'Must be at least 8 in length'
	    		})
	    	}
	    	else{
	    		return this.setState({
	    			isValidPhone:"is-valid",
	    			errorPhone:''
	    		})
	    	}
	    }

	    const handleSubmit = e =>{
	    	let dataUsername = { };
			dataUsername["target"] = {};
			dataUsername["target"]["value"] = $("#valUsername").val()
	    	handleUsername(dataUsername)

	    	let dataEmail = { };
			dataEmail["target"] = {};
			dataEmail["target"]["value"] = $("#valEmail").val()
	    	handleEmail(dataEmail)

	    	let dataPhone = { };
			dataPhone["target"] = {};
			dataPhone["target"]["value"] = $("#valPhone").val()
	    	handlePhone(dataPhone)

	    	let dataAddress = { };
			dataAddress["target"] = {};
			dataAddress["target"]["value"] = $("#valAddress").val()
	    	handleAddress(dataAddress)

	    	let dataPassword = { };
			dataPassword["target"] = {};
			dataPassword["target"]["value"] = $("#valPassword").val()
	    	handlePassword(dataPassword)

	    	let dataCPassword = { };
			dataCPassword["target"] = {};
			dataCPassword["target"]["value"] = $("#valConfirmPassword").val()
	    	handleConfirmPassword(dataCPassword)
	
	    	if(this.state.isValidUsername == "is-valid" && this.state.isValidPassword == "is-valid" && this.state.isValidConfirmPassword == "is-valid" && this.state.isValidEmail == "is-valid" && this.state.isValidPhone == "is-valid" && this.state.isValidAddress) {
	    		const buyer = {
	    		  username: this.state.username,
			      email: this.state.email,
				  phone: this.state.phone,
				  address: this.state.address,
				  password: this.state.password,
	    		}
	    		const buyerRef = firebase.database().ref("Customer");
	    		buyerRef.push(buyer)
	    		//alert("Register success")
	    		return <Redirect to="/login" />
	    	}
	    	else{
	    		return false
	    	}

	    }

        return (
            <div>
                <section id="authors" className="my-5 text-center">
					<div className="container">
						<div className="row justify-content-center">
							
								<div className="col-8 mb-5 ">
									<h1 className=" pb-3">
									Register
								</h1>
								</div>
							
						</div>
						<div className="row w-50 m-auto">
			                <div className="text-left" style={{width:'50%', margin: 'auto'}}>
				            	<div className="form-group">
						            <label htmlfor="username">Username</label>
						            <input type="text" name="username" className={"form-control " + this.state.isValidUsername} onChange={handleUsername} id="valUsername"/>
						        	<div className="invalid-feedback">{this.state.errorUsername}</div>
						        </div>
								<div className="form-group">
						            <label htmlfor="email">Email</label>
						            <input type="text" name="email" className={"form-control " + this.state.isValidEmail} onChange={handleEmail} id="valEmail"/>
						        	<div className="invalid-feedback">{this.state.errorEmail}</div>
						        </div>
						        <div className="form-group">
						            <label htmlfor="mobileNumber">Mobile Number</label>
						            <input type="text" name="mobile" className={"form-control " + this.state.isValidPhone} onChange={handlePhone} id="valPhone"/>
						        	<div className="invalid-feedback">{this.state.errorPhone}</div>
						        </div>
						        <div className="form-group">
						            <label htmlfor="address">Address</label>
						            <input type="text" name="address" className={"form-control " + this.state.isValidAddress} onChange={handleAddress} id='valAddress'/>
						        	<div className="invalid-feedback">{this.state.errorAddress}</div>
						        </div>
						        <div className="form-group">
						            <label htmlfor="password">Password</label>
						            <input type="password" name="password" className={"form-control " + this.state.isValidPassword} onChange={handlePassword} id="valPassword"/>  
						        	<div className="invalid-feedback">{this.state.errorPassword}</div>
						        </div>
						        <div className="form-group">
						            <label htmlfor="password">Confirm Password</label>
						            <input type="password" name="password" className={"form-control " + this.state.isValidConfirmPassword} onChange={handleConfirmPassword} id="valConfirmPassword"/>  
						        	<div className="invalid-feedback">{this.state.errorCPassword}</div>
						        </div>
						            <NavLink to="#" className="btn btn-primary" onClick={handleSubmit}>Register</NavLink>
					                {/*<a href="#" className="btn btn-primary" >Register</a>*/}
			        		</div>
							
							
						</div>
					</div>
				</section>
            </div>
        );
    }
}

export default Register;