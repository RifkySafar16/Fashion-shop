import React, { Component, Fragment } from 'react';

import classes from './Layout.css';
import Navigation from '../../components/Navigation/Navigation';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    render () {
        return (
            <Fragment>
                <Navigation />
                <main>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
}

export default Layout;