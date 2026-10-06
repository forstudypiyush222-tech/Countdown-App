const endDate = new Date("17 Oct 2026 22:00:00").getTime();
const startDate = new Date().getTime();

// function updateTimer() {

//     const currentDate = new Date().getTime();

//     const distanceCovered = startDate - currentDate;
//     // time -> milisecond
//     const distancePending = endDate - currentDate;

//     //? Calculate days, min, hrs, secs
//     //todo 1 day = 24 * 60 * 60 * 1000 ms
//     const oneDayInMillis = 24 * 60 * 60 * 1000;
//     const oneHourInMillis = 60 * 60 * 1000;
//     const oneMinuteInMillis = 60 * 1000;
//     const oneSecondsInMillis = 1000;

//     const days = Math.floor(distancePending/(oneDayInMillis));

//     const hrs = Math.floor(distancePending%(oneDayInMillis)/(oneHourInMillis));

//     const mins = Math.floor(distancePending%(oneHourInMillis)/(oneMinuteInMillis));

//     const secs = Math.floor(distancePending%(oneMinuteInMillis)/(oneSecondsInMillis));

//     //? Calculate Width Percentage for Progress Bar

//     const totalDistance = endDate - startDate;

//     const percentageDistance = (distanceCovered/totalDistance)*100;



//     //? Populate In UI

//     document.getElementById("days").innerHTML = days;
//     document.getElementById("hours").innerHTML = hrs;
//     document.getElementById("minutes").innerHTML = mins;
//     document.getElementById("seconds").innerHTML = secs;

//     //? Set Width for Progress Bar

//     document.getElementById("progress-bar").style.width = percentageDistance + "%";


//     if(distancePending < 0) {
//         clearInterval(x);
//         document.getElementById("countdown").innerHTML = "Expired";
//         document.getElementById("progress-bar").style.width = "100%";
//     }




// }

let x = setInterval(function updateTimer() {

    const currentDate = new Date().getTime();

    const distanceCovered = startDate - currentDate;
    // time -> milisecond
    const distancePending = endDate - currentDate;

    //? Calculate days, min, hrs, secs
    //todo 1 day = 24 * 60 * 60 * 1000 ms
    const oneDayInMillis = 24 * 60 * 60 * 1000;
    const oneHourInMillis = 60 * 60 * 1000;
    const oneMinuteInMillis = 60 * 1000;
    const oneSecondsInMillis = 1000;

    const days = Math.floor(distancePending/(oneDayInMillis));

    const hrs = Math.floor(distancePending%(oneDayInMillis)/(oneHourInMillis));

    const mins = Math.floor(distancePending%(oneHourInMillis)/(oneMinuteInMillis));

    const secs = Math.floor(distancePending%(oneMinuteInMillis)/(oneSecondsInMillis));

    //? Calculate Width Percentage for Progress Bar

    const totalDistance = endDate - startDate;

    const percentageDistance = (distanceCovered/totalDistance)*100;



    //? Populate In UI

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    //? Set Width for Progress Bar

    document.getElementById("progress-bar").style.width = percentageDistance + "%";


    if(distancePending < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = `<span class="expired">Expired</span>`;
        document.getElementById("progress-bar").style.width = "100%";
    }




}, 1000);