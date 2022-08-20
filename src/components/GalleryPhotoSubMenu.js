import React from "react";
import { photoGalleryCategories } from "data/photoGalleryData.js";
import { NavItem, NavLink, Nav, Container, Row, Col} from "reactstrap";
import 'components/componentStyle.css';

function GalleryPhotoSubMenu(props) {
    return (
        <div className="nav-tabs-navigation text-center">
        <div className="nav-tabs-wrapper">
            <Nav role="tablist" tabs>
              {photoGalleryCategories.map((item,count) => {
                return(
                    <NavItem key={count + item}>
                      <NavLink style ={{cursor: "pointer", fontWeight:"500"}}
                          className={Number(props.activeTab) === Number(count) ? "active" : ""}
                          onClick={() => {
                          props.onClick(Number(count));
                      }}><span className="gallery-nav-link">{item}</span>
                      </NavLink>
                  </NavItem>
                )
              })}              
            </Nav>
        </div>
    </div>
    )
}

export default GalleryPhotoSubMenu;