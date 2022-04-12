import React from "react";
import { BiCalendarAlt, BiDetail, BiSend } from "react-icons/bi";
import { Row, Col } from "reactstrap";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'components/componentStyle.css'

function ContactNavToggle(props) {
    let tabs = [false, false, false];
    tabs[props.activeTab] = true;

  return(
    <Row >
        <Col className="toggle-container">
            <ButtonGroup className="toggle contact-toggle mb-2">
                <div className="button-toggle">
                    <input type="radio" id="video" name="form" 
                        checked={tabs[0]}
                        onChange={() => props.onChange(0)}
                        ></input>
                    <label htmlFor="video">
                        {/* <BiCalendarAlt className="mr-2"></BiCalendarAlt> */}
                        <span className="contact-toggle-text-bigWidth">1. Choose Date</span>
                        <span className="contact-toggle-text-smallWidth">1. Date</span>
                    </label>
                </div>
                
                <div className="button-toggle">
                    <input type="radio" id="photo" name="form" 
                        checked={tabs[1]}
                        onChange={() => props.onChange(1)}
                        ></input>
                    <label htmlFor="photo">
                        {/* <BiDetail className="mr-2"></BiDetail> */}
                        <span className="contact-toggle-text-bigWidth">2. Enter Details</span>
                        <span className="contact-toggle-text-smallWidth">2. Details</span>

                    </label>
                </div>

                <div className="button-toggle">
                    <input type="radio" id="review" name="form" 
                        checked={tabs[2]}
                        onChange={() => props.onChange(2)}
                        ></input>
                    <label htmlFor="review">
                        {/* <BiSend className="mr-2"></BiSend> */}
                        <span className="contact-toggle-text-bigWidth">3. Review & Send</span>
                        <span className="contact-toggle-text-smallWidth">3. Send</span>

                    </label>
                </div>
            </ButtonGroup>
        </Col>
    </Row>
  );
}

export default ContactNavToggle;