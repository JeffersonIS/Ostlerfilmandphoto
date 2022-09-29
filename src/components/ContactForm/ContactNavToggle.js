import React from "react";
import { Row, Col } from "reactstrap";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'components/componentStyle.css'

function ContactNavToggle(props) {
    // const completeTabColor = '#green';
    let tabs = [false, false, false];
    tabs[props.activeTab] = true;

    // let typeComplete, dateComplete, detailsComplete;
    // if(props.activeTab > 2){
    //     detailsComplete = completeTabColor
    //     dateComplete = completeTabColor
    //     typeComplete = completeTabColor
    // }else if(props.activeTab > 1){
    //     dateComplete = completeTabColor
    //     typeComplete = completeTabColor
    // } else if(props.activeTab > 0){
    //     typeComplete = completeTabColor
    // }

  return(
    <Row >
        <Col className="toggle-container">
            <ButtonGroup className="toggle contact-toggle mb-2">
            <div className="button-toggle" >
                    <input type="radio" id="type" name="form" 
                        checked={tabs[0]}
                        onChange={() => props.onChange(0)}
                        ></input>
                    <label htmlFor="type">
                        {/* <BiCalendarAlt className="mr-2"></BiCalendarAlt> */}
                        <span className="contact-toggle-text-bigWidth">1. Select Type</span>
                        <span className="contact-toggle-text-smallWidth">1. Type</span>
                    </label>
                </div>

                <div className="button-toggle">
                    <input type="radio" id="date" name="form" 
                        checked={tabs[1]}
                        onChange={() => props.onChange(1)}
                        ></input>
                    <label htmlFor="date">
                        {/* <BiCalendarAlt className="mr-2"></BiCalendarAlt> */}
                        <span className="contact-toggle-text-bigWidth">2. Choose Date</span>
                        <span className="contact-toggle-text-smallWidth">2. Date</span>
                    </label>
                </div>
                
                <div className="button-toggle">
                    <input type="radio" id="details" name="form" 
                        checked={tabs[2]}
                        onChange={() => props.onChange(2)}
                        ></input>
                    <label htmlFor="details">
                        {/* <BiDetail className="mr-2"></BiDetail> */}
                        <span className="contact-toggle-text-bigWidth">3. Enter Details</span>
                        <span className="contact-toggle-text-smallWidth">3. Details</span>

                    </label>
                </div>
            </ButtonGroup>
        </Col>
    </Row>
  );
}

export default ContactNavToggle;