import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import firebase from "../../firebase";

class Settings extends Component {
    componentDidMount () {
    	var db = firebase.database();
		var ref = db.ref("Customer");

    	ref.on("value", function(snapshot) {
		  console.log(snapshot.val());
		}, function (errorObject) {
		  console.log("The read failed: " + errorObject.code);
		});
    }

    render () {

        return (
            <div>
                <section id="authors" className="my-5 text-center">
					<div className="container">
						<div className="row justify-content-center">
							
								<div className="col-8 mb-5 ">
									<h1 className=" pb-3">
									Login
								</h1>
								<p className="lead pb-3">
									To order our product please login first
								</p>
								</div>
							
						</div>
						<div className="row w-50 m-auto">
			                <div className="text-left" style={{width:'50%', margin: 'auto'}}>
				            	<div className="form-group">
						            <label htmlfor="username">Username</label>
						            <input type="text" id="username" className="form-control "/>
						        </div>
						        <div className="form-group">
						            <label htmlfor="password">Password</label>
						            <input type="text" id="password" className="form-control "/> 
						            <NavLink to="/Register" className="text-danger">Don't have an account? Register here</NavLink>
					                {/*<a href="/Register" className="text-danger">Don't have an account? Register here</a>*/}
						        </div>
					                 <a href="#" className="btn btn-primary">Login</a>
			        		</div>
							
							
						</div>
					</div>
				</section>
            </div>
        );
    }
}

export default Settings;