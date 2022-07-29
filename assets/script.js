// current time
var today = moment().format('dddd, Do MMMM');
$("#currentDay").text(today)

// array to id allocated for each <input>
var time = [
    '#nineAm',
    '#tenAm',
    '#elevenAm',
    '#twelvePm',
    '#onePm',
    '#twoPm',
    '#threePm',
    '#fourPm',
    '#fivePm',
];

// array to id allocated for each <span>
var workTime = [
    '#nine',
    '#ten',
    '#eleven',
    '#twelve',
    '#one',
    '#two',
    '#three',
    '#four',
    '#five',
];

// settings dependent on time
var now = moment().format('HH')

for (var i = 0; i < workTime.length; i++){
    var workHour = workTime[i]
    var calendar = moment($(workHour).text(),"hh:mm").format('HH')

    if (now > calendar) {
        $(time[i]).addClass("past");
    } else if (now == calendar) {
        $(time[i]).addClass("present");
    } else {
        $(time[i]).addClass("future");
    }
};

// function when button is clicked
$("button").on("click", function(event){
    // event.preventDefault();
    var i = $(this).val()
    var enteredTime = time[i];
 
    console.log($(enteredTime).val());
    localStorage.setItem(i + 'hour', $(enteredTime).val());
    $("p#alert").text("Appointment added to Local Storage");
    setTimeout(function() { $("p#alert").hide(); }, 5000);

});

// To retrieve data saved on local storage when the page is refreshed
for (var i = 0; i < time.length; i++){
    var enteredEvent = time[i];
    $(enteredEvent).val(localStorage.getItem(i + "hour"));
}


