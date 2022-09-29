export function advanceForm(setState, state, tabNum) {

    switch(state.activeTab) {
        case 0:
            if(validateSection1(setState, state)){
                setState({section1Valid: true});

                if(tabNum < 2){
                    changeTab(setState, tabNum)
                } else {
                    if(state.section2Valid){changeTab(setState, tabNum)}
                }
            }
            break;
        case 1:
            if(tabNum === 0){
                changeTab(setState, tabNum)
            } else {
                if(validateSection2(setState, state)){
                    setState({section2Valid: true});
                    changeTab(setState, tabNum)
                };
            }
            break;
        case 2:
            if(validateSection3(setState, state)){
                changeTab(setState, tabNum)
            }
            break;
        case 3:
            changeTab(setState, tabNum)
            break;
        default:
            return;
      }
}

function changeTab(setState, tabNum){
    setState({activeTab: tabNum});
}

function validateSection1(setState, state){
    let advance = true;

    let type = state.type;
    if(type === "Bridals/First Look Video" || type === "Full Day Wedding Package"){
        setState({ typeValid: true })
        setState({typeInvalid: false})
    } else {
        advance = false;
        setState({ typeValid: false })
        setState({typeInvalid: true})
    }

    return advance;
}

function validateSection2(setState, state){
    let advance = true;

    if(!state.requested_date){
        let message = 'Please choose a date'
        setErroState(setState, 'dateErrorMessage', message)
        advance = false;
    } else {
        let message = ''
        setErroState(setState, 'dateErrorMessage', message)
    }
    if(state.showTimeInput){
        if(!state.time){
            let message = 'Please select a time'
            setErroState(setState, 'timeErrorMessage', message)
            advance = false;
        } else {
            let message = ''
            setErroState(setState, 'timeErrorMessage', message)
        }
    }
    return advance;
}

export function handleSubmitHelper(emailjs, setState, state, setSuccessModal, setErrorModal) {
    const {name, email, otherDetails, requested_date, type, time, location} = state;

    if(state.section1Valid && state.section2Valid){
        setState({submitting: true})
        let templateParams = {
            from_name: name,
            email: email,
            type: type,
            requested_date: requested_date,
            time: time,
            location: location,
            other_details: otherDetails,
           }

            emailjs.send(
            // 'service_7lkfjn8',
            'service_008dq1y',
            // 'template_rqa3wfz',
            'template_pu0c2ml',
             templateParams,
             '-23neNnyfJ4TEs6ey'
            // 'user_YNJsHSOXIRFNqGJlb9OmK'
           ).then(() => {
                setState({submitting: false})
                setState({hideError: true});
                setState({hideSuccess: false});
                setSuccessModal(true);
            }).then(() => {
                resetForm(setState)
            }).catch(() => {
                setState({submitting: false})
                setState({hideError: false})
                setState({hideSuccess: true});
                setErrorModal(true);
                resetForm(setState)
            });
    }

 }

function validateSection3(setState, state){
    let nameValid, emailValid, locationValid;
    let advance = true;

    //Validate Name
    if(state.name === ""){
        nameValid = false;
        setState({ nameValid: false })
        setState({ nameInvalid: true })
    } else {
        nameValid = true;
        setState({ nameValid: true })
        setState({ nameInvalid: false })
    }

    //Validate Email
    let emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    if(emailRegex.test(state.email)){
        emailValid = true;
        setState({ emailValid: true })
        setState({emailInvalid: false})
    } else {
        emailValid = false;
        setState({ emailValid: false })
        setState({emailInvalid: true})
    }

    //Validate location
    if(state.location === ""){
        locationValid = false;
        setState({ locationValid: false })
        setState({ locationInvalid: true })
    } else {
        locationValid = true;
        setState({ locationValid: true })
        setState({ locationInvalid: false })
    }

    let validationArray = [nameValid, emailValid, locationValid];
    validationArray.forEach(item => {
        if(!item){
            advance = false;
        }
    });
    console.log('validate section 3', advance)
    return advance;
}

function setErroState(setState, param, message) {
    setState({[param]: message})
}

export function formatTime(time) {
    let formattedTime = new Date(time * 1000).toISOString().substr(11, 8);
    let hour = Number(formattedTime.substring(0,2));
    let min = formattedTime.substring(3,5);
    let suffix = hour >= 12 ? "PM":"AM";
    let newHour;
    hour > 12 ? newHour = hour - 12 : newHour = hour;
    return `${newHour}:${min} ${suffix}`;
}

export function formatDate(date){
    return date.substring(0, 15)
}

export function checkDateIfPast(dateToCheck){
    let today = new Date();
    if(dateToCheck <= today){
        return true;
    }
    return false;
}

export function resetForm(setState) {
    setState({
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
    });
}


