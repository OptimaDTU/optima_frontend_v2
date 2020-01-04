/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/Index.js";
import Team from './views/team/Team'
import FullPost from './views/fullpost/Fullpost'
import PostLists from 'views/blogs/PostLists'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import LoginPage from './views/examples/LoginPage'
import Dashboard from './views/admin/dashboard'
import Auth from './components/Hoc/auth'

ReactDOM.render(
    <>
        <IndexNavbar />
        <div className="wrapper" style={{width:"100%"}}>
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route exact path="/" render={props => <Index {...props} />} />
        <Route exact path="/team" component={Team} />
          <Route exact path="/videos" component={PostLists} />
        <Route exact path="/module/:id" component={FullPost} />
        <Route exact path="/admin/login" component ={Auth(LoginPage,false)} />
        <Route exact path="/admin/dashboard" component ={Auth(Dashboard,true)} />
        <Route exact path='/auth' component={Auth} />
       
        <Redirect to="/" />
      </Switch>
    </Switch>
  </BrowserRouter> </div> </>,
  document.getElementById("root")
);
