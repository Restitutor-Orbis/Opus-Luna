function timeTick() {
	var time = new Date();
	var minutes = time.getMinutes(); 
	var hours = time.getHours(); 

	//makes sure all numbers have two decimals (5 -> 05)
	if(minutes < 10) {
		minutes = "0" + minutes;
	}
	if(hours < 10) {
		hours = "0" + hours;
	}

	document.getElementById("title").innerHTML = (hours + ":" + minutes);

	setTimeout(timeTick, 10000);
}

function setDate() {
    var date = new Date();
    var month = date.getMonth();
    var day = date.getDate();

	//DANISH MONTH NAMES
    const monthNames = ["Januar", "Februar", "Marts", "April", "Maj", "Juni",
    "Juli", "August", "September", "Oktober", "November", "December"];

	//ENGLISH MONTH NAMES
	//const monthNames = ["January", "February", "March", "April", "May", "June",
    //"July", "August", "September", "October", "November", "December"];

    month = monthNames[month];

    document.getElementById("date").innerHTML = (day + ". " + month);
}