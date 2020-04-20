import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'


window.onload = function(){
	function setDate() {
		const now = new Date();
		const mm = now.getMonth();
		const dd = now.getDay();
		const dt = now.getDate();
		const yyyy = now.getFullYear();
		const secs = now.getSeconds();
		const mins = now.getMinutes();
		const hrs = now.getHours();
		const monthName = [
			'January','February','March','April',
			'May','June','July','August','September',
			'October','November','December'
		];
		const dayName = [ 'Sunday', 'Monday', 'Tuesday',
			'Wednesday', 'Thursday', 'Friday',
			'Saturday'
		];
		
		var hours ="";
		var minutes="";
		var seconds="";

		var month="";
		var day="";
		var date="";
		var year="";
		var meridian ="";
		if (hrs > 12) {
			hours = hrs - 12;
			meridian = "pm";	
		} else {
			hours = hrs;
			if(hours == 12){
			  meridian = "pm";
			}else{
			  meridian = "am";
			}
		}

		if (hours < 10) {
			hours = '0' + hours;
		}
		if (secs < 10) {
			seconds = '0' + secs;
		} else {
			seconds = secs;
		}
		
		if (mins < 10) {
			minutes= '0' + mins;
		} else {
			minutes = mins;
		}
		month = monthName[mm];
		day = dayName[dd];
		date = dt;
		year = yyyy;
		const presentDate = document.querySelector('.date');
		//present.innerHTML = 
		presentDate.innerHTML = `Date: ${day}, ${date} ${month} ${year}. | Time: ${hours}:${minutes}:${seconds}${meridian}`;
		//dt +" " +month +" " +year". | Time
		const copyright = document.querySelector('.copyright');
		//copyright.innerHTML = year;
	}
	setInterval(setDate,1000);
}

ReactDOM.render(<App />, document.getElementById('root'))