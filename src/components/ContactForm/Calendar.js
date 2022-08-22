import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId, getGoogleCalEvents } from '../../utils/event-utils.js';
import "components/componentStyle.css";
import { checkDateIfPast } from 'utils/form-utils.js';

function Calendar(props) {
    const [googleCalEvents, setGoogleCalEvents] = useState();
    const calendarRef = React.createRef();
    const REQUESTED_ID = 'requested_id'
    let day;

    //filter if the date is allowed to be selected
    const handleSelectAllow = (selectInfo) => {
        let allowSelect = true;
        day = String(selectInfo.start);
        if(day.substring(0,3) === "Sun"){
            allowSelect = false;
        }

        allowSelect = !checkDateIfPast(selectInfo.start)

        //check if date is busy
        if(googleCalEvents.includes(selectInfo.startStr)){
            allowSelect = false;
        }
        
        return allowSelect; 
    }

    const handleDateSelect = (selectInfo) => {

        let calendarApi = selectInfo.view.calendar     
        calendarApi.unselect() // clear date selection
    
        if (selectInfo.startStr) {
            calendarApi.addEvent({
                id: REQUESTED_ID,
                title: '',
                start: selectInfo.startStr,
                end: '',
                allDay: true,
                display: 'background',
                backgroundColor: 'lightgreen'
          });

          props.onChange(day, selectInfo)
        }
      }

    const handleUnselect = () => {
        //if (selectSingleDate){...}
        let calendarApi = calendarRef.current.getApi();
        let events = calendarApi.getEvents();
        let id = events[events.length-1]?._def.publicId;

        //removes last requested_date selection
        if(id === REQUESTED_ID){
            calendarApi.getEventById(id).remove();
        }
    }

    useEffect(() => {
        const calendarApi = calendarRef.current.getApi();

        if(!googleCalEvents){
            getGoogleCalEvents(setGoogleCalEvents, calendarApi);
        }

        //Updates the calendar with the selected date when the user clicks off, and then back to the date tab
        let events = calendarApi.getEvents();
        if(events.length === 0 && props.startStr !== ''){
            calendarApi.addEvent({
                id: createEventId(),
                title: '',
                start: props.startStr,
                end: props.endStr,
                allDay: true,
                display: 'background',
                backgroundColor: 'lightgreen'
            });
        }
    }, [calendarRef, googleCalEvents, props.startStr, props.endStr]);
      


    return (
        <div className='calendar-outer-container mt-4'>
            <div className='calendar-inner-container'>
                <FullCalendar
                    ref={calendarRef}
                    aspectRatio={1.75}
                    plugins={[dayGridPlugin, interactionPlugin]}
                    headerToolbar={{
                        left: '',
                        center: 'title',
                        right: 'prev,next'
                    }}
                    initialView="dayGridMonth"
                    editable={true}
                    selectable={true}
                    selectMirror={false}
                    dayMaxEvents={true}
                    initialEvents={INITIAL_EVENTS}
                    select={handleDateSelect}
                    unselect={handleUnselect}
                    longPressDelay={0}
                    selectAllow={handleSelectAllow}
                    businessHours={{
                        daysOfWeek: [ 1, 2, 3, 4, 5, 6 ], // Monday - Sat
                    }}
                />
            </div>
        </div>
    )
}

export default Calendar;