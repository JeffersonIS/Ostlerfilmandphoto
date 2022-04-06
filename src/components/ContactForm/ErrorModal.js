import React from "react";
import { Button, Modal} from "reactstrap";
import { FcCancel } from "react-icons/fc";
import 'components/componentStyle.css'

function ErrorModal(props) {
    return(
        <Modal isOpen={props.isOpen} toggle={() => props.setErrorModal(false)}>
            <div className="modal-header">
                <h5 className="modal-title font500" id="exampleModalLiveLabel">
                    Message Failed to Send! 
                    <FcCancel className="ml-2 mb-1"></FcCancel>
                </h5>
            </div>
            <div className="modal-body">
                <p className="font500">Please check the information you entered and try again. If the problem persists, email us directly or DM us on social media. Sorry for the troubles!</p>
            </div>
            <div className="text-right mb-2 mr-3">
                <div className="right-side">
                    <Button
                    className="btn-link"
                    color="secondary"
                    type="button"
                    onClick={() => props.setErrorModal(false)}
                    >
                    Close
                    </Button>
                </div>
            </div>
        </Modal>
  );
}

export default ErrorModal;