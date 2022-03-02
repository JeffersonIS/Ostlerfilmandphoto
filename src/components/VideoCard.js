import React from "react";
import 'components/componentStyle.css'

import { Card, CardImg, CardImgOverlay, CardText} from "reactstrap";
//import { IKImage} from 'imagekitio-react';

function VideoCard(props) {
    const item = props.item;
    return(
        <Card className="m-3 videocard-container"
            onClick={ () => {props.onClick(item.sessionID)}}
            >

            <CardImg src={item.imgPath}
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

export default VideoCard;
