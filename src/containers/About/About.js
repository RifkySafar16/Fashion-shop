import React, { Component } from 'react';
import avatar from './avatar.png';

class Profile extends Component {
    componentDidMount () {
    }

    render () {
        return (
            <div>
                <section id="authors" className="my-5 text-center">
					<div className="container">
						<div className="row justify-content-center">
							
								<div className="col-8 mb-5 ">
									<h1 className=" pb-3">
									About
								</h1>
								<p className="lead pb-3">
									Get to know how this cloth company was established
								</p>
								</div>
							
						</div>
						<div className="row align-items-center">
							<div className="col-8 text-justify">
								<p className="w-30">&emsp;&emsp;Fashion sells more than hundreds of clothing products from various brands in the world.

Starting in 2008 before we had a website we sold in several major forums in Indonesia such as kaskus.com, modify.com, indowebster.com.
The products we sell are premium quality because we only sell imported goods. Seeing the good response from the buyers, in 2009 we opened our first website, www.fashion-irwan.com and over time we changed the name to www.fashion-indo.com and finally using the name www.fashion.com so more easily remembered by the customer.</p>
							</div>
							<div className="col-4">
								<img src={process.env.PUBLIC_URL + "img/about3.jpg"} alt="" className="w-100 rounded-lg"/>
							</div>	
						</div>
					</div>
				</section>
            </div>
        );
    }
}

export default Profile;