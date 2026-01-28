 function startTime() {
        let today = new Date();
        let hr = today.getHours();
        let min = today.getMinutes();
        let sec = today.getSeconds(); 

        let ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
        hr = (hr == 0) ? 12 : hr;
        hr = (hr > 12) ? hr - 12 : hr;

        hr = checkTime(hr);
        min = checkTime(min);
        sec = checkTime(sec);

        document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;

        const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

        let curWeekday = days[today.getDay()];
        let curDay = today.getDate();
        let curMonth = months[today.getMonth()];
        let curYear = today.getFullYear();

        let date = +curDay+" " +curWeekday + ", " + curMonth + " " + curYear;
        document.getElementById("date").innerHTML = date;

        setTimeout(startTime, 500);
    }
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }