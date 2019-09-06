
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// Services
import { InstructorService } from '../../../services/student/instuctor.service';
import { routerTransition } from '../../../services/config/config.service';

@Component({
	selector: 'app-instructor-details',
	templateUrl: './instructor-detail.component.html',
	styleUrls: ['./instructor-detail.component.css'],
	animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})

export class InstructorDetailsComponent implements OnInit {
	index: any;
	instructorDetail: any;
	constructor(private router: Router, private route: ActivatedRoute, private instructorService: InstructorService, private toastr: ToastrService) {
		// Get user detail index number sent in params
		this.route.params.subscribe(params => {
			this.index = params['id'];
			if (this.index && this.index != null && this.index !== undefined) {
				this.getInstructorDetails(this.index);
			}
		});
	}

	ngOnInit() {
	}

	// Get student details
	getInstructorDetails(index: number) {
		const getinstructorDetail = this.instructorService.getinstructorDetails(index);
		if (getinstructorDetail) {
			this.instructorDetail = getinstructorDetail.studentData;
			this.toastr.success("Instructor details fetched sucessfully", 'Success');
		}
	}

}

