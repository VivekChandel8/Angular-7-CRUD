/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';

// Services
import { ValidationService } from '../../../services/config/config.service';
import { InstructorService } from '../../../services/student/instuctor.service';
import { routerTransition } from '../../../services/config/config.service';

import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-instructor-add',
	templateUrl: './instructor-add.component.html',
	styleUrls: ['./instructor-add.component.css'],
	animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})

export class InstructorAddComponent implements OnInit {
	// create studentAddForm of type FormGroup
	instructorAddForm: FormGroup;
	index: any;

	constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private instructorService: InstructorService, private toastr: ToastrService) {

		// Check for route params
		this.route.params.subscribe(params => {
			this.index = params['id'];
			// check if ID exists in route & call update or add methods accordingly
			if (this.index && this.index !== null && this.index !== undefined) {
				this.getInstructorDetails(this.index);
			} else {
				this.createForm(null);
			}
		});
	}

	ngOnInit() {
	}

	// Submit student details form
	doRegister() {
		if (this.index && this.index !== null && this.index !== undefined) {
			this.instructorAddForm.value.id = this.index;
		} else {
			this.index = null;
		}
		const studentRegister = this.instructorService.doRegisterInstructor(this.instructorAddForm.value, this.index);
		if (studentRegister) {
			if (studentRegister.code === 200) {
				this.toastr.success(studentRegister.message, 'Success');
				this.router.navigate(['/instructors']);
			} else {
				this.toastr.error(studentRegister.message, 'Failed');
			}
		}
	}

	// If this is update form, get user details and update form
	getInstructorDetails(index: number) {
		const studentDetail = this.instructorService.getinstructorDetails(index);
		this.createForm(studentDetail);
	}

	// If this is update request then auto fill form
	createForm(data) {
		if (data === null) {
			this.instructorAddForm = this.formBuilder.group({
				first_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
				last_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
				phone: ['', [Validators.required, ValidationService.checkLimit(5000000000, 9999999999)]],
				email: ['', [Validators.required, ValidationService.emailValidator]]
			});
		} else {
			this.instructorAddForm = this.formBuilder.group({
				first_name: [data.studentData.first_name, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
				last_name: [data.studentData.last_name, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
				phone: [data.studentData.phone, [Validators.required, ValidationService.checkLimit(5000000000, 9999999999)]],
				email: [data.studentData.email, [Validators.required, ValidationService.emailValidator]]
			});
		}
	}

}
