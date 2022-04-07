import React from "react";
import { Row, Col } from 'reactstrap';
import 'components/componentStyle.css'

function ContactReviewPage(props) {
    return(
        <>
         <p className='text-center text-muted'>Review information and submit</p>
        <Row className="mr-5 ml-5">
            <Col>
                <div className='m-5 pl-5 pr-5'>
                    <p className='font500'><strong>Name: </strong>{props.state.name}</p>
                    <p className='font500'><strong>Date: </strong>{props.state.requested_date} {props.state.showTimeInput && (<span>@ ~{props.state.time}</span>)}</p>
                    <p className='font500'><strong>Session Type: </strong>{props.state.type}</p>

                </div> 
            </Col>
            <Col>
                <div className='m-5 pl-5 pr-5'>
                    <p className='font500'><strong>Email: </strong>{props.state.email}</p>
                    <p className='font500'><strong>Location: </strong>{props.state.location}</p>
                    <p className='font500'><strong>Other Details: </strong>{props.state.otherDetails}</p>

                </div> 
            </Col>
        </Row>
        </>

  );
}

export default ContactReviewPage;
