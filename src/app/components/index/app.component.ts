/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'Student Management By Sangwin Gawande';

	// Add few students for initial listing
	studentsList = [
	{	
		id : 1,
		first_name : "Rakesh",
		last_name : "Sharma",
		email : "rakeshsharma@yopmail.com",
		phone : 9503733178,
		department : "Science"
	},
	{
		id : 2,
		first_name : "Sumeet",
		last_name : "Rana",
		email : "sumeet@yopmail.com",
		phone : 8574889658,
		department : "Commerce"
	},
	{
		id : 3,
		first_name : "Tina",
		last_name : "Dillon",
		email : "tina@yopmail.com",
		phone : 7485889658,
		department : "Science"
	},
	{
		id : 4,
		first_name : "Swati",
		last_name : "Chauhan",
		email : "swati@yopmail.com",
		phone : 9685589748,
		department : "Arts"
	},
	{
		id : 5,
		first_name : "Priyanka",
		last_name : "Thakur",
		email : "priyanka@yopmail.com",
		phone : 8595856547,
		department : "Engineering"
	}
	];
	
	instructorList = [
		{	
			id : 1,
			first_name : "Vivek",
			last_name : "Chandel",
			email : "vivek.chandel@mechlintech.com",
			phone : 9503733178,
			department : "Science"
		},
		{
			id : 2,
			first_name : "Ashley",
			last_name : "Greene",
			email : "ashley@yopmail.com",
			phone : 8574889658,
			department : "Commerce"
		},
		{
			id : 3,
			first_name : "Kalaus",
			last_name : "Mikalson",
			email : "kalaus@yopmail.com",
			phone : 7485889658,
			department : "Science"
		},
		{
			id : 4,
			first_name : "Elena",
			last_name : "Gilbert",
			email : "elena@yopmail.com",
			phone : 9685589748,
			department : "Arts"
		},
		{
			id : 5,
			first_name : "Caroline",
			last_name : "Parker",
			email : "caroline@yopmail.com",
			phone : 8595856547,
			department : "Engineering"
		}
		];

	constructor() {
		// Save students to localStorage
		localStorage.setItem('students', JSON.stringify(this.studentsList));
		localStorage.setItem('instructors', JSON.stringify(this.instructorList));
	}
}

/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
