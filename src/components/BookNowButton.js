import React from "react";
import { Button, Row, Col } from "reactstrap";

import 'components/componentStyle.css'

function BookNowButton(props) {
    return(
        <div className="text-center mt-1">
            <Row>
                <Col>
                    <a href="/contact">
                        <Button color="warning" type="button"
                            className="m-2 mt-5" style={{minWidth: "25em"}}>
                            Book Now
                        </Button>
                    </a>
                    {props.addNote ?
                        <><br></br><small>Prices do not include travel costs (see below)</small></> :
                        <></>}
                </Col>
            </Row>
        </div>
  );
}

export default BookNowButton;