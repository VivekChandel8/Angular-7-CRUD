import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

// Services
import { InstructorService } from '../../../services/student/instuctor.service';
import { routerTransition } from '../../../services/config/config.service';

@Component({
	selector: 'app-instructor-list',
	templateUrl: './instructor-list.component.html',
	styleUrls: ['./instructor-list.component.css'],
	animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})

export class InstructorListComponent implements OnInit {
	instructorList: any;
	instructorData: any;
	constructor(private instructorService: InstructorService, private toastr: ToastrService) { }
	// Call student list function on page load
	ngOnInit() {
		this.getinstructorList();
	}

	// Get student list from services
	getinstructorList() {
		const instructorList = this.instructorService.getAllInstructor();
		
		this.success(instructorList);
	}

	// Get student list success
	success(data) {
		
		this.instructorData = data.data;

		for (let i = 0; i < this.instructorData.length; i++) {
			this.instructorData[i].name = this.instructorData[i].first_name + ' ' + this.instructorData[i].last_name;
		}
	}

	// Delete a student with its index
	deleteInstructor(index: number) {
		// get confirm box for confirmation
		const r = confirm('Are you sure?');
		if (r === true) {
			const studentDelete = this.instructorService.deleteInstructor(index);
			if (studentDelete) {
				this.toastr.success('Success', 'Instructor Deleted');
			}
			this.getinstructorList();
		}
	}
}