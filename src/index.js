import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import HomePage from "views/HomePage.js";
import GalleryPage from "views/GalleryPage.js";
import PricingPage from "views/PricingPage.js";
import AboutPage from "views/AboutPage.js";
import ContactPage from "views/ContactPage.js";
import ReviewPage from "views/ReviewPage.js";
import LeaveReviewPage from "views/LeaveReviewPage.js";

ReactDOM.render(
  <>
    <BrowserRouter>
    <Switch>
      {/* <Route  path="/gallery/video/:id?" render={(props) => <GalleryVideoPage {...props} />}/> */}
      <Route  path="/pricing/:type" render={(props) => <PricingPage {...props} />}/>
      <Route  path="/about" render={(props) => <AboutPage {...props} />}/>
      <Route  path="/contact" render={(props) => <ContactPage {...props} />}/>
      <Route  path="/reviews" render={(props) => <ReviewPage {...props} />}/>
      <Route  path="/leave-review" render={(props) => <LeaveReviewPage {...props} />}/>
      <Route  path="/gallery/:type/:session?" render={(props) => <GalleryPage {...props} />}/>
      <Route  path="/" render={(props) => <HomePage {...props} />}/>
    </Switch>
  </BrowserRouter>
  </>,
  document.getElementById("root")
);
