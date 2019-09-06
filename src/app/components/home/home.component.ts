/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */

 import { Component, OnInit } from '@angular/core';
 import { RouterModule, Routes ,Router} from '@angular/router';
 import { ToastrService } from 'ngx-toastr';

 // Components
 import { StudentListComponent } from '../student/list/student-list.component';
 import { StudentDetailsComponent } from '../student/details/student-details.component';
 import { StudentAddComponent } from '../student/add/student-add.component';

 // Services
import { routerTransition } from '../../services/config/config.service';
import { InstructorListComponent } from '../instructor/list/instructor-list.component';
import { InstructorDetailsComponent } from '../instructor/details/instructor-detail.component';
import { InstructorAddComponent } from '../instructor/add/instructor-add.component';

 @Component({
 	selector: 'app-home',
 	templateUrl: './home.component.html',
 	styleUrls: ['./home.component.css'],
 	animations: [routerTransition()],
 	host: {'[@routerTransition]': ''}
 })


 export class HomeComponent implements OnInit {
 	active:string;
 	constructor(private router: Router,private toastr: ToastrService) {
 		// Detect route changes for active sidebar menu
 		this.router.events.subscribe((val) => {
 			this.routeChanged(val);
 		});
 	}

 	ngOnInit() {
 	}

 	// Detect route changes for active sidebar menu
 	routeChanged(val){
 		this.active = val.url;
 	}

 	// Logout User
 	logOut(){
 		this.toastr.success('Success', "Logged Out Successfully");
 		localStorage.removeItem('userData');
 		this.router.navigate(['/login']);
 	}
 }


 // Define and export child routes of HomeComponent
 export const homeChildRoutes : Routes = [
 {
 	path: '',
 	component: StudentListComponent
 },
 {
 	path: 'add',
 	component: StudentAddComponent
 },
 {
 	path: 'update/:id',
 	component: StudentAddComponent
 },
 {
 	path: 'detail/:id',
 	component: StudentDetailsComponent
 },
 {
    path: 'instructors',
    component: InstructorListComponent
  },
  {
    path: 'instructors/details/:id',
    component: InstructorDetailsComponent
  },
  {
	  path: 'instructors/add',
	  component: InstructorAddComponent
  },
  {
	path: 'instructors/update/:id',
	component: InstructorAddComponent
}
 ];

/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
