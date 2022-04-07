/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
//import NucleoIcons from "views/NucleoIcons.js";
import HomePage from "views/HomePage.js";
import GalleryPage from "views/GalleryPage.js";
import PricingPage from "views/PricingPage.js";
import AboutPage from "views/AboutPage.js";
import ContactPage from "views/ContactPage.js";



// others

ReactDOM.render(
  <>
    <HashRouter>
    <Switch>
      <Route  path="/gallery" render={(props) => <GalleryPage {...props} />}/>
      <Route  path="/pricing" render={(props) => <PricingPage {...props} />}/>
      <Route  path="/about" render={(props) => <AboutPage {...props} />}/>
      <Route  path="/contact" render={(props) => <ContactPage {...props} />}/>
      <Route  path="/" render={(props) => <HomePage {...props} />}/>
    </Switch>
  </HashRouter>
  </>,
  document.getElementById("root")
);
