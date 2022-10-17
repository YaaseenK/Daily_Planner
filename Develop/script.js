// current day var calls on moment() method and format() and set the format of date
var currentDay = moment().format("dddd, MMM D YYYY");
// looking for id in html and setting text to the currentDay var above
$("#dateToday").text(currentDay);

createCal();
// function to create the calendar
function createCal(){
    // for loop to itterate through the hours for Daily_Planner
    for(var i = 9; i < 18; i++){
    // html scripts to append
        var timeBlockDiv = `<div class="row timeBlock" id="${i}"></div>`;
        var hour = `<div class="col-1 hour" id="hour${i}">${i} AM</div>`;
        var textarea = `<textarea class="col-10 description" id="textarea${i}" data-number="${i}" ></textarea>`;
        var btn = `<button class='saveBtn col-1' id="btn" data-number="${i}">Save</button>`;
        // appending scripts
        $("#container").append(timeBlockDiv);
        $(`#${i}`).append(hour);
        $(`#${i}`).append(textarea);
        $(`#${i}`).append(btn);
    }

    // for loop to target html DOM #id
    for (let j = 13; j <= 17;  j++) {
        // switch statement to change time from 24 hr clock to standard
        switch (`hour${j}`) {
            case `hour${13}`:
                $(`#hour13`).text(1 + ' pm'.toUpperCase());

                break;
            case `hour${14}`:
                $(`#hour14`).text(2 +' pm'.toUpperCase());

                break;
            case `hour${15}`:
                $(`#hour15`).text(3 +' pm'.toUpperCase());
                
                break;
            case `hour${16}`:
                $(`#hour16`).text(4 +' pm'.toUpperCase());
                
                break;
            case `hour${j}`:
                $(`#hour17`).text(5 +' pm'.toUpperCase());
                
                break;
        
            default:
                break;
        }
    }
    // after the DOM is set we call for styling function
    colorCode();
}
// colorCode Styling function
function colorCode() {
    // foreach class containing timeBlock we add an id 
    // we use moment js to depict time
    // then use if state ments to add classes to the dom for color codes set in style.css
    $(".timeBlock").each(function () {
        let realTime = moment().hours();
        let hour = parseInt($(this).attr("id"));

        if (hour > realTime) {
            $(this).addClass("future");
        }
        else if (hour === realTime) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
} 
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


