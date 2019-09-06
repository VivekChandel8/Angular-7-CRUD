import { Injectable } from '@angular/core';

@Injectable()
export class InstructorService {

  constructor() { }

  // Get all students list via API or any data storage
  getAllInstructor() {
    let instructorList: any;
    if (localStorage.getItem('instructors') && localStorage.getItem('instructors') !== '') {
        instructorList = {
        code: 200,
        message: 'instructors List Fetched Successfully',
        data: JSON.parse(localStorage.getItem('instructors'))
      };
    } else {
        instructorList = {
        code: 200,
        message: 'instructors List Fetched Successfully',
        data: JSON.parse(localStorage.getItem('instructors'))
      };
    }
    return instructorList;
  }

  doRegisterInstructor(data, index) {
    const instructorList = JSON.parse(localStorage.getItem('instructors'));
    let returnData;
    console.log('index', index);
    if (index != null) {
      for (let i = 0; i < instructorList.length; i++) {
        if (index !== i && instructorList[i].email === data.email) {
          returnData = {
            code: 503,
            message: 'Email Address Already In Use',
            data: null
          };
          return returnData;
        }
      }

      instructorList[index] = data;
      localStorage.setItem('instructors', JSON.stringify(instructorList));
      returnData = {
        code: 200,
        message: 'Student Successfully Updated',
        data: JSON.parse(localStorage.getItem('instructors'))
      };
    } else {
      data.id = this.generateRandomID();
      for (let i = 0; i < instructorList.length; i++) {
        if (instructorList[i].email === data.email) {
          returnData = {
            code: 503,
            message: 'Email Address Already In Use',
            data: null
          };
          return returnData;
        }
      }
      instructorList.unshift(data);

      localStorage.setItem('instructors', JSON.stringify(instructorList));

      returnData = {
        code: 200,
        message: 'Instructor Successfully Added',
        data: JSON.parse(localStorage.getItem('instructors'))
      };
    }
    return returnData;
  }

  deleteInstructor(index: number) {
    const instructorList = JSON.parse(localStorage.getItem('instructors'));

    instructorList.splice(index, 1);

    localStorage.setItem('instructors', JSON.stringify(instructorList));

    const returnData = {
      code: 200,
      message: 'instructor Successfully Deleted',
      data: JSON.parse(localStorage.getItem('instructors'))
    };

    return returnData;
  }



  getinstructorDetails(index: number) {
    const instructorList = JSON.parse(localStorage.getItem('instructors'));

    const returnData = {
      code: 200,
      message: 'instructor Details Fetched',
      studentData: instructorList[index]
    };

    return returnData;
  }


  generateRandomID() {
    const x = Math.floor((Math.random() * Math.random() * 9999));
    return x;
  }

}
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */