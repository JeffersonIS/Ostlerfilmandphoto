import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
//import Layout from '../components/layout'
import { Button, FormFeedback, Form, FormGroup, FormText, Label, Input,
        Col, Row } from 'reactstrap'

class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            showEmail: '',
            message: '',
            requested_date: '',
            type: '',
            nameValid: '',
            nameInvalid: '',
            emailValid: '',
            emailInvalid: '',
            requested_dateValid: '',
            requested_dateInvalid: '',
            typeValid: '',
            typeInvalid: '',
            hideSuccess: true,
            hideError: true,
        }
    }

//Form Validations
validateInput(name, email, requested_date, type){
    let nameValid, emailValid, requested_dateValid, typeValid;
    let isValid = true;

    //Validate Name
    if(name === ""){
        nameValid = false;
        this.setState({ nameValid: false })
        this.setState({ nameInvalid: true })
    } else {
        nameValid = true;
        this.setState({ nameValid: true })
        this.setState({ nameInvalid: false })
    }

    //Validate Email
    let emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    if(emailRegex.test(email)){
        emailValid = true;
        this.setState({ emailValid: true })
        this.setState({emailInvalid: false})
    } else {
        emailValid = false;
        this.setState({ emailValid: false })
        this.setState({emailInvalid: true})
    }


    //Validate Date
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = yyyy + mm + dd;
    let newRequestedDate = requested_date.replaceAll("-", "");

    if((Number(newRequestedDate) - Number(today)) > 0){
        requested_dateValid = true;
        this.setState({ requested_dateValid: true })
        this.setState({requested_dateInvalid: false})
    } else {
        requested_dateValid = false
        this.setState({ requested_dateValid: false })
        this.setState({requested_dateInvalid: true})
    }

    //Validate Type
    if(type === "Family" || type === "Portraits" || type === "Engagements" || type === "Bridals" || type === "Wedding Package"){
        typeValid = true;
        this.setState({ typeValid: true })
        this.setState({typeInvalid: false})
    } else {
        typeValid = false;
        this.setState({ typeValid: false })
        this.setState({typeInvalid: true})
    }

    let validationArray = [nameValid, emailValid, requested_dateValid, typeValid];
    validationArray.forEach(item => {
        if(!item){
            isValid = false;
        }
    });

    return isValid;
}

handleSubmit(e) {
    e.preventDefault()
    const {name, email, message, requested_date, type} = this.state;
    let isValid = this.validateInput(name, email, requested_date, type);

    if(isValid){
        this.setState({showEmail: email});
        let templateParams = {
            from_name: name,
            email: email,
            message: message,
            requested_date: requested_date,
            type: type,
           }

            emailjs.send(
            'service_7lkfjn8',
            'template_rqa3wfz',
             templateParams,
            'user_YNJsHSOXIRFNqGJlb9OmK'
           ).then(() => {this.setState({hideError: true})
                        this.setState({hideSuccess: false})})
           .then(() => {this.resetForm()})
           .catch(() => {this.setState({hideError: false})
                        this.setState({hideSuccess: true});
                        this.resetForm()});
    }

 }

resetForm() {
    this.setState({
        name: '',
            email: '',
            message: '',
            requested_date: '',
            type: '',
            nameValid: '',
            nameInvalid: '',
            emailValid: '',
            emailInvalid: '',
            requested_dateValid: '',
            requested_dateInvalid: '',
            typeValid: '',
            typeInvalid: '',
    })
  }

handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
}

render() {
    return (
      <>
        <div>
          <p className="mb-4 pt-2" style={{fontSize: "120%"}}>Send us a message and we'll get back to you. We would love to work with you.</p>

          <p className="h5 p-2 mb-4"
            style={{backgroundColor: "#ddffdd", borderRadius: "8px", fontSize: "130%"}}
            hidden={this.state.hideSuccess}>
              Form submitted successfully! We'll get back to you very soon. <br></br>
              Check your email for a confimation. We emailed {this.state.showEmail}
          </p>
          <p className="h5 p-2 mb-4"
            style={{backgroundColor: "#ffcccb", borderRadius: "8px", fontSize: "130%"}}
            hidden={this.state.hideError}>
              Whoops! The form did not submit successfully. <br></br>
              Send us an email at <i>ostlerfilmandphoto@gmail.com</i> with the details of your photo shoot.
          </p>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-default"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
                valid={this.state.emailValid}
                invalid={this.state.emailInvalid}
              />
              <FormFeedback invalid>Enter a valid email</FormFeedback>
            </FormGroup>

            <FormGroup controlId="formBasicName">
                <Label className="text-muted">Name</Label>
                <Input
                    type="text"
                    name="name"
                    value={this.state.name}
                    className="text-default"
                    onChange={this.handleChange.bind(this, 'name')}
                    placeholder="First & Last name"
                    valid={this.state.nameValid}
                    invalid={this.state.nameInvalid}
                />
                <FormFeedback invalid>Enter a name please:)</FormFeedback>
            </FormGroup>
            <Row>
                <Col>
                    <FormGroup controlId="formType">
                        <Label className="text-muted">Session Type</Label>
                        <Input
                            type="select"
                            name="type"
                            className="text-default"
                            value={this.state.type}
                            onChange={this.handleChange.bind(this, 'type')}
                            valid={this.state.typeValid}
                            invalid={this.state.typeInvalid}
                        >
                            <option>Select</option>
                            <option>Family</option>
                            <option>Portraits</option>
                            <option>Engagements</option>
                            <option>Bridals</option>
                            <option>Wedding Day Package</option>
                        </Input>
                        <FormFeedback invalid>Select the type of session you'd like</FormFeedback>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup controlId="formRequestedDate">
                        <Label className="text-muted">Requested Date</Label>
                        <Input
                            type="date"
                            name="requested_date"
                            className="text-default"
                            value={this.state.requested_date}
                            onChange={this.handleChange.bind(this, 'requested_date')}
                            valid={this.state.requested_dateValid}
                            invalid={this.state.requested_dateInvalid}
                        />
                        <FormFeedback invalid>Pick a proper date</FormFeedback>
                        <FormText>The date you wish to take pictures on.</FormText>
                    </FormGroup>
                </Col>
            </Row>

            <FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Details</Label>
              <Input
                type="textarea"
                name="message"
                className="text-default"
                placeholder="Let us know the details of your event"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup>

            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </div>
      </>
    );
  }
}
export default ContactForm;