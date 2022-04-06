import React from "react";
import { FaCameraRetro, FaVideo } from "react-icons/fa";
import { Row, Col } from "reactstrap";
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import 'components/componentStyle.css'

function PhotoVideoToggle(props) {
    return(
        <Row className="mt-5">
        <Col className="toggle-container">

         <ButtonGroup className="toggle ">
            <div className="button-toggle">
                <input type="radio" id="video" name="pricing" 
                    checked={!props.showPhotoData}
                    onChange={(e) => props.onChange(!e.currentTarget.value)}
                    ></input>
                <label className="button-toggle-right" htmlFor="video">
                    <FaVideo className="mr-2 "></FaVideo>Video</label>
            </div>
             
            <div className="button-toggle">
                <input type="radio" id="photo" name="pricing" 
                    checked={props.showPhotoData}
                    onChange={(e) => props.onChange(e.currentTarget.value)}
                    ></input>
                <label className="button-toggle-left" htmlFor="photo">
                    <FaCameraRetro className="mr-2"></FaCameraRetro>Photo</label>
            </div>
         </ButtonGroup>

        
        </Col>
    </Row>
  );
}

export default PhotoVideoToggle;
