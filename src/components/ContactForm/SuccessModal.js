import React from "react";
import { Button, Modal} from "reactstrap";
import { FcCheckmark } from "react-icons/fc";
import 'components/componentStyle.css'

function SuccessModal(props) {
    return(
        <Modal isOpen={props.isOpen} toggle={() => props.setSuccessModal(false)}>
            <div className="modal-header">
                <h5 className="modal-title font500" id="exampleModalLiveLabel">
                    Message Successfully Sent! 
                    <FcCheckmark className="ml-2 mb-1"></FcCheckmark>
                </h5>
            </div>
            <div className="modal-body">
                <p className="font500">Thank you for sending us an inquiry! We just sent you a confirmation email.</p>
            </div>
            <div className="text-right mb-2 mr-3">
                <div className="right-side">
                    <Button
                    className="btn-link"
                    color="secondary"
                    type="button"
                    onClick={() => props.setSuccessModal(false)}
                    >
                    Close
                    </Button>
                </div>
            </div>
        </Modal>
  );
}

export default SuccessModal;
