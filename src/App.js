import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';

import Layout from './hoc/Layout/Layout';
import Footer from './components/footer';
import Home from './containers/Home/Home';
import Products from './containers/Products/Products';
import About from './containers/About/About';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import './App.css';

const store = createStore(reducer);
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <div>
        <Layout>
        <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Home"  component={Home} />
              <Route path="/Products" component={Products} />
              <Route path="/About" component={About} />
              <Route path="/Login" component={Login} />
              <Route path="/Register" component={Register} />
        </Switch>
      <Footer />
      </Layout>
      </div>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
