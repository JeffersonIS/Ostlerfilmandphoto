import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import { advanceForm, formatTime, formatDate, handleSubmitHelper } from '../../utils/form-utils';
import "components/componentStyle.css"
import { Button, FormFeedback, Form, FormGroup, Label, Input,
        Col, Row } from 'reactstrap'
import Calendar from './Calendar';
import ContactNavToggle from './ContactNavToggle';
import TimePicker from 'react-bootstrap-time-picker';
import ContactReviewPage from './ContactReviewPage';
import PricingPageContent from 'components/PricingPageContent';
import ReviewPage from "../../views/ReviewPage";

class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {
          name: '',
          email: '',
          otherDetails: '',
          requested_date: '',
          date_start_str: '',
          date_end_str: '',
          time: '',
          type: '',
          location: '',
          nameValid: '',
          nameInvalid: '',
          emailValid: '',
          emailInvalid: '',
          timeValid: '',
          timeInvalid: '',
          typeValid: '',
          typeInvalid: '',
          locationValid: '',
          locationInvalid: '',
          hideSuccess: true,
          hideError: true,
          activeTab: 0,
          showTimeInput: false,
          timeErrorMessage: '',
          dateErrorMessage: '',
          section1Valid: false,
          section2Valid: false,
          submitting: false,
        }
    }

handleSubmit(e) {
  e.preventDefault();
  handleSubmitHelper(emailjs, this.setState.bind(this), this.state, this.props.setSuccessModal, this.props.setErrorModal);

 }

handleChange = (param, e) => {
  this.setState({ [param]: e.target.value })
}

handleDateChange = (day, selectInfo) => {
  let formattedDate = formatDate(day);
  this.setState({
    requested_date: formattedDate,
    date_start_str: selectInfo.startStr,
    date_end_str: selectInfo.endStr,
    dateErrorMessage: '',
  })
}

handleTimeChange(e) {
  let formattedTime = formatTime(e);
  this.setState({
    time: formattedTime,
    timeErrorMessage: '',
  });
}

handleChangeTab = (e) => {
  advanceForm(this.setState.bind(this), this.state, e);
}

handleShowTimeInput = (e) => {
  if(e.target.value === 'true'){
    this.setState({showTimeInput: true});
  } else {
    this.setState({showTimeInput: false});
    this.setState({time: ''});
  }
}

getNextTab = () => {
  let tab = this.state.activeTab;
  if(tab === 0) this.props.updateUrl(`date`);
  if(tab === 1) this.props.updateUrl(`details`);
  if(tab === 2) this.props.updateUrl(`review`);
  
  return this.state.activeTab + 1;
}

render() {
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <div>

        <div className="text-center mb-2 font500" id='contactFormNavToggle'>
          <ContactNavToggle onChange={(e) => this.handleChangeTab(e)} activeTab={this.state.activeTab} />
        </div>

        {this.state.activeTab === 0 && (
          <>
          <p className='text-center text-muted'>Choose a session type. Click 'next' below</p>
          <Row>
            <Col>
              <FormGroup >
                <div className='contact-session-type-container'>
                  <Input
                      type="select"
                      name="type"
                      className="text-default contact-session-type mt-4"
                      value={this.state.type}
                      onChange={this.handleChange.bind(this, 'type')}
                      valid={this.state.typeValid}
                      invalid={this.state.typeInvalid}
                  >
                      <option>Select</option>
                      <option>Bridals/First Look Video</option>
                      <option>Full Day Wedding Package</option>

                  </Input>

                </div>
                  <FormFeedback invalid>Select the type of session you'd like to book</FormFeedback>
              </FormGroup>
            </Col>
          </Row>

          <Row className='mt-2'>
              <PricingPageContent/>
          </Row>
          <br/>
          <Row className='mt-3 mb-5≈'>
              <ReviewPage />
          </Row>
          
            <div className='text-right'>
              <Button 
                onClick={() => {advanceForm(this.setState.bind(this), this.state, this.getNextTab())}}
                variant="primary" 
                className="btn btn-success mt-5" 
                style={{width:"20%"}} 
                type="button" >Next
              </Button>
            </div>
        </>
        )}

        {this.state.activeTab === 1 && (
          <>
          <p className='text-center text-muted'>Pick a date and time below</p>
          <Row className='mt-2'>
            <Col sm={8}>
              <Calendar 
                requested_date={this.state.requested_date} 
                onChange={this.handleDateChange.bind(this)} 
                startStr={this.state.date_start_str}
                endStr={this.state.date_end_str}/>
              <label className='date-error-message error-message font500 pt-2'>{this.state.dateErrorMessage}</label>
              <label className='date-error-message text-muted font500 pt-2'>{this.state.requested_date}</label>


            </Col>
            <Col sm={4}>
              {this.state.showTimeInput 
               ? (
                 <div className='mt-4 pl-3'>
                  <FormGroup>
                    <Label className="text-muted font500">Approx. Start Time <span className='pl-2 error-message'>{this.state.timeErrorMessage}</span></Label>
                    <TimePicker id='timepick' start="7:00" end="22:00" step={30} onChange={(e) => this.handleTimeChange(e)} value={this.state.time} />
                  </FormGroup>
                 <Button outline color="info" onClick={(e) => this.handleShowTimeInput(e)} value={false}>I actually don't know the time</Button>
                 </div>)
              : (
                <div className='mt-4 pl-3'>
                  <p className='font500'>Do you know the time your session/event will start, or the time you'd like to start? If not, we will schedule one later.</p>
                  <div className='text-center mt-3'>
                    <Button outline color="success" onClick={(e) => this.handleShowTimeInput(e)} value={true} type="button">Yes</Button>
                  </div>
                </div>
              )}

            </Col>
          </Row>

          <div className='text-right'>
            <Button 
              onClick={() => {advanceForm(this.setState.bind(this), this.state, this.getNextTab())}}
              variant="primary" 
              className="btn btn-success mt-2" 
              style={{width:"20%"}} 
              type="button" >Next
            </Button>
          </div>
        </>

        )}

        {this.state.activeTab === 2 && (
          <>
            <Row className='mt-4'>
            <Col>
              <FormGroup >
                  <Label className="text-muted">Name</Label>
                  <Input
                      type="text"
                      name="name"
                      value={this.state.name}
                      className="text-default"
                      onChange={this.handleChange.bind(this, 'name')}
                      placeholder="First & Last"
                      valid={this.state.nameValid}
                      invalid={this.state.nameInvalid}
                  />
                  <FormFeedback invalid>Enter your name please</FormFeedback>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label className="text-muted">Email address</Label>
                <Input
                  type="email"
                  name="email"
                  value={this.state.email}
                  className="text-default"
                  onChange={this.handleChange.bind(this, 'email')}
                  placeholder="Email"
                  valid={this.state.emailValid}
                  invalid={this.state.emailInvalid}
                />
                <FormFeedback invalid>Enter a valid email</FormFeedback>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormGroup>
                <Label className="text-muted">Location</Label>
                <Input
                  type="text"
                  name="location"
                  className="text-default"
                  placeholder="Location"
                  value={this.state.location}
                  valid={this.state.locationValid}
                  invalid={this.state.locationInvalid}
                  onChange={this.handleChange.bind(this, 'location')}
                />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup>
            <Label className="text-muted">Other Details</Label>
            <Input
              type="textarea"
              name="other-details"
              className="text-default"
              placeholder="Other details"
              value={this.state.otherDetails}
              onChange={this.handleChange.bind(this, 'otherDetails')}
            />
          </FormGroup>

          <div className='text-right'>
            <Button 
              onClick={() => {advanceForm(this.setState.bind(this), this.state, this.getNextTab())}}
              variant="primary" 
              className="btn btn-success mt-5" 
              style={{width:"20%"}} 
              type="button" >Next
            </Button>
          </div>
        </>

        )}

        {this.state.activeTab === 3 && (
        <>
          <ContactReviewPage state={this.state}/> 
          <div className='text-right'>
            {this.state.submitting 
              ? (
                <Button variant="primary" className="btn btn-success contact-advance-btn mt-3" style={{width:"20%"}} type="submit" >
                    <svg class="circular-loader"viewBox="25 25 50 50" >
                      <circle class="loader-path" cx="50" cy="50" r="20" fill="none" stroke-width="6" />
                    </svg>
                </Button>

                )
              : (
                <>
                  <Button variant="primary" className="btn btn-success contact-advance-btn mt-3"  type="submit" >
                  <span>Send</span>
                  </Button>
                  <br></br>
                  <Label className='mt-2' style={{width: "85%"}}>Once you send an inquiry, you'll get a confirmation email, and then we'll reach out shortly.</Label>
                </>

            )}
          </div>
        </>
        )}


        </div>
      </Form>
    );
  }
}
export default ContactForm;