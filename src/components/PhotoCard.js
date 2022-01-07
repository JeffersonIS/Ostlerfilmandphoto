import React from "react";
import 'components/componentStyle.css'

import { Card, CardImg, CardImgOverlay, CardText} from "reactstrap";
//import { IKImage} from 'imagekitio-react';

const urlEndpoint = "https://ik.imagekit.io/ostlerfilmandphoto/"

function PhotoCard(props) {
    const item = props.item;
    const imagePath = item.folderPath + item.imgHeaderPath;
    return(
        <Card className="m-3"
            style={{cursor:"pointer", display:"inline-block"}}
            onClick={ () => {props.onClick(item.sessionID)}}
            >

            <CardImg src={urlEndpoint + imagePath}
            className="card-style"
            />

            <CardImgOverlay>
                <CardText className="mb-0 pb-1 pt-1 pl-2"
                style={{position:"absolute", bottom:"0px",
                        backgroundColor:"#ffffffcb", width:"100%", left:"0"}}
                ><strong>{item.name}</strong></CardText>
            </CardImgOverlay>
        </Card>
  );
}

export default PhotoCard;
