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
import { Card, CardImg, CardImgOverlay, CardText} from "reactstrap";
//import { IKImage} from 'imagekitio-react';

const urlEndpoint = "https://ik.imagekit.io/ostlerfilmandphoto/"

function PhotoCard(props) {
    const item = props.item;
    const imagePath = item.folderPath + item.imgHeaderPath;
    return(
        <Card className="m-3"
            style={{width: '26em', cursor:"pointer", display:"inline-block"}}
            onClick={ () => {props.onClick(item.sessionID)}}
            >

            <CardImg src={urlEndpoint + imagePath}
                    style={{minWidth:"26em", maxWidth:"26em", height:"auto"}}
            />

            <CardImgOverlay>
                <CardText className="mb-0 pb-1 pt-1 pl-2"
                style={{position:"absolute", bottom:"0px",
                        backgroundColor:"#ffffffcb", width:"100%", left:"0"}}
                >{item.name}</CardText>
            </CardImgOverlay>
        </Card>
  );
}

export default PhotoCard;
