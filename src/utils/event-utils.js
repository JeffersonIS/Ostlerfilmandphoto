let eventGuid = 0
const GOOGLE_API_KEY = 'AIzaSyDHwem4VQagI9qV51fB_cJGg8sv_j1wtO4';
const CALENDAR_ID = 'ostlerfilmandphoto@gmail.com';
export const INITIAL_EVENTS = [];

export function createEventId() {
  return String(eventGuid++)
}

export function getGoogleCalEvents(setEvents, calendarApi){
  const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${GOOGLE_API_KEY}`;

  return fetch(url).then(
      (response) => response.json(),
    ).then((data) => extractEvents(data.items, setEvents, calendarApi));
  }

  function extractEvents(events, setEvents, calendarApi){
    let newEvents = [];
    events.map((e) => {
      let start = e.start.dateTime?.substring(0,10) ?? e.start.date?.substring(0,10);
      let end = e.end.dateTime?.substring(0,10) ?? e.end.date?.substring(0,10);

      calendarApi.addEvent({
        id: createEventId(),
        start: start,
        end: end,
        allDay: true,
        display: 'background',
        backgroundColor: 'lightgrey'
      });

       if(start !== end){
        let dateToAdd = start;
        let tomorrow;
        while (dateToAdd !== end){
          newEvents.push(dateToAdd);

          tomorrow = new Date(`${dateToAdd}T00:00:00`);
          tomorrow.setDate(tomorrow.getDate() + 1);
          dateToAdd = tomorrow;
          dateToAdd = dateToAdd.toISOString().split('T')[0];
        }
       } else {
          newEvents.push(start);
       }
     })

    setEvents(newEvents);
  }
