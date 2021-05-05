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

// reactstrap components

// core components

function ShortPageHeader(props) {
  let pageHeader = React.createRef();
  let imagePath = props.path

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <div>
      <div
        className="page-header page-header-xs"
        style={{
          backgroundImage:
            "url("+ imagePath + ")",
        }}
        // style={{
        //   backgroundImage:
        //     "url(" + require("assets/img/boat-beach-2.JPG").default + ")",
        // }}
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
      </div>
    </div>
  );
}

export default ShortPageHeader;
