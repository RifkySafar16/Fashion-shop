import React, { Component } from 'react';

class Footer extends Component {
    componentDidMount () {
    }

    render () {
        return (
            <div>
                <footer id="main-footer" className="bg-dark text-white mt-5 p-5">
				    <div className="conatiner">
				      <div className="row">
				        <div className="col">
				          <p className="lead text-center">Copyright &copy; 2019 Fashion Store</p>
				        </div>
				      </div>
				    </div>
				  </footer>
            </div>
        );
    }
}

export default Footer;