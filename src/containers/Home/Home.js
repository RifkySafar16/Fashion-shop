import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';
import fashioLogo from './fashion-logo.png';
import classes from './Home.css';

import axios from 'axios';

class Index extends Component {
    constructor(props){
    super(props);

    this.state = {
      products: [],
      name: null,
      email: null
    }
  }

  componentDidMount(){
    this.getProducts()
    this.setState({ name: null, email: null})


  }

  getProducts = _ => {
    axios.get('http://localhost:4000/products')
      .then(response => {
        this.setState({ products: response.data.data})
        console.log(this.state.products)
      })
      .catch(err => console.log(err))
  }

  handleDetails = (dataProduct) =>{
  	this.setState({dataProducts:dataProduct})
    this.props.onDetailClick(dataProduct);
  }

   addSubscriber = () => {
   	const newSubscriber = {
   		name: this.state.name,
   		email: this.state.email
   	}
    axios.post( 'http://localhost:4000/newsletter', newSubscriber )
            .then( response => {
                console.log( response.data );
                this.setState({name: null, email: null})
            } )
            .catch( error => {
                console.log(error);
            } );
  }

  renderProduct = () => {
    const list = this.state.products.map((product, id) => {
    	let arraytgl = product.DatePosted.split(' ')
    	let tgl = arraytgl[0] + ' ' + arraytgl[1] +', ' + arraytgl[2];
    	let dataProduct = {
    		id:product.Id,
    		title:product.Title,
    		category:product.Category,
    		body:product.Body
    	}
    	return <tr key={product.Id}>
          <td scope="row">{id+1}</td>
          <td>{product.Title}</td>
          <td>{product.Category}</td>
          <td>{tgl}</td>
          <td><NavLink to="/Details" className="btn btn-secondary" onClick={() => this.handleDetails(dataProduct)}>
            <i className="fa fa-angle-double-right"></i> Details
          </NavLink></td>
        </tr>
    	
    })
    return (list);
  }

    render () {
        return (
            <div>

		          <section id="showcase" className="py-5">	
        				<div className="primary-overlay text-white">
        				<div className="container">	
        				<div className="row">
        					<div className="col-lg-6 text-center">
        						<h1 className="display-2 mt-5 pt-5">SALE 50% SUMMER FEST</h1>
        						<p className="lead">Summer fest will be held on 11 November to 13 November ...
        						</p>
        						<a href="#test" className="btn btn-outline-secondary btn-lg text-white"> <i className="fa fa-arrow-right"></i> Read More</a>
        					</div>
        			
        				</div>
        				</div>
        			</div>
        			</section>

              <section className="text-center p-5 bg-light text-dark" id="test" style={{"marginTop" : '-80px'}}>
                  <br/>
                  <br/>
                  <br/>
   
                  <div className="container">
                    <div className="row">
                      <div className="col text-justify" >
                        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Summer fest will be held on 11 November to 13 November at Gelora Bung Karno. The big event the most awaited by Indi clothing lovers has finally come back.

Winning success in eight cities in the previous year's event, Summer Fest was a challenge for Lian Mipro organizers, to add to the 2019 event's point.

The enthusiasm of the community was very high which made them come back again.Summer Fest will be held again to meet the needs of the people in the Capital City of Jakarta in welcoming summer seasson. Not only offer the cloth apparel, Summer Fest also 
provides free vermak clothing services. Visitors who shop can vermak directly in the Summer Fest area. Fashion Shop also offering great discount and it is 50% for all products come the event, don't miss this great offer.</p>
                      </div>
                      <div className="col" >
                      <img src={process.env.PUBLIC_URL + "img/summer-fest.png"} alt="" className="img-fluid w-100 mb-3"/>
                      </div>
                    </div>
                  </div>
                </section>

              <section className="text-center p-5 bg-light text-dark" style={{"marginBottom":"-50px"}}>
                  <div className="container" style={{"marginBottom":"10px"}}>
                    <div className="row">
                      <div className="col">
                        <h1 >Subscribe For Our Newsletter</h1>
                        <p>Don't miss our new products and events by input your name and email</p>
                        <div className="form-inline justify-content-center">
                          <label className="sr-only" htmlFor="name">Name</label>
                          <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" placeholder="Enter Name" onChange={event => this.setState({name:event.target.value})}/>

                          <label className="sr-only" htmlFor="email">Email</label>
                          <input type="email" className="form-control mb-2 mr-sm-2 mb-sm-0" placeholder="Enter Email" onChange={event => this.setState({email:event.target.value})}/>
                          <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={()=>{this.addSubscriber()}}>Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

               
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header ">
                        <h5 class="modal-title ml-auto" id="exampleModalLabel">Thank You For Subscribe</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        We will send you our new catalog and our upcoming event

                      </div>
                      
                    </div>
                  </div>
                </div>

			
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        session: state.sessions
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDetailClick: (dataProduct) => dispatch({type: actionTypes.DETAIL_CLICK, payload: dataProduct})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);