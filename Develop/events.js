// gets data from localStorage 
// then posts it onto the DOM
getevents = () => { 
    const allEvents = JSON.parse(localStorage.getItem('allEvents')) || [];
    const time = JSON.parse(localStorage.getItem('time')) || [];
    let count = 0;
    // forEach allEvents Loop 
    allEvents.forEach(element => {
        // if allEvents Index == time index
        if(allEvents[element[count]] = time[count]){
            // forEach time element post the allEvents index to time index
            time.forEach(e => {
                $(`#${time[count]}`).text(allEvents[count])
            });
            
        }
        count++
    });
}
// getEvents function call
getevents();

// onClick function on any button property inside html
$(`button`).on('click', e  =>{


    // on click calls saveElement Function()
    saveEvent = () => {
        let message = 'Sorry, Please try again! \n Input can not be null!';
        const choice = e.target;
        const selectedId = choice.dataset['number'];
        let userEventText = document.getElementById(`textarea${selectedId}`).value
        // if the textbox is empty and button is click
        // we show an error message
            if(!userEventText){
                // $("#textarea"+selectedEvent).text(message);
                $('#warning').removeClass("hidden")
                $('#warning').text(message)
                return;
            }
            // else error message is hidden and text is save to localstorage
            else{
                
                $('#warning').addClass("hidden")
                localStorage.setItem(`recentEvent`, userEventText);
                let eventTime = `textarea${selectedId}`
                localStorage.setItem("id", eventTime);
            }
            
            const recentEvent = localStorage.getItem(`recentEvent`);
            const setId = localStorage.getItem(`id`)
            const allEvents = JSON.parse(localStorage.getItem('allEvents')) || [];
            const time = JSON.parse(localStorage.getItem('time')) || [];
            // create object called event and store an array of events
            const event = {
                event: recentEvent,
                
            };
            // create object of time and set the uniqe id 
            const timeOfE = {
                id: setId
            }
            // push eventObject to string array made above
            allEvents.push(recentEvent);
            // push timeObject to string array made above 
            time.push(setId);
            // sets the object arrays to localstorage
            localStorage.setItem('allEvents' , JSON.stringify(allEvents));
            localStorage.setItem('time' , JSON.stringify(time));       
        }
saveEvent();
});


