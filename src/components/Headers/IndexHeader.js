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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Button } from "reactstrap";


// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/amber-grad-header.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container className="text-center">
            <div className="title-brand" style={{marginTop:"-10em"}}>
              <h1 className="h1" style={{fontSize:"5em"}}>
                  Ostler
              </h1>
              <span className="h3" >
                  Film & Photo
              </span>
            </div>

              <Button color="warning" outline type="button" className="mt-5">
                  Book a Session
                </Button>

          </Container>
        </div>

      </div>
    </>
  );
}

export default IndexHeader;
