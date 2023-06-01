import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'crud-Angular';
  allUser: any;
  isEdit = false;
  userObj: any = {
    name: '',
    mobile: '',
    email: '',
    password: '',
    id: '',
  };
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.getLatestUser();
  }

  addUser(myObj: any) {
    console.log(myObj);
    this.commonService.createUser(myObj).subscribe((res) => {
      this.getLatestUser();
    });
  }
  getLatestUser() {
    this.commonService.getAllUser().subscribe((res) => {
      this.allUser = res;
    });
  }

  editUser(user: any) {
    this.userObj = user;
    this.isEdit = true;
  }

  deleteUser(user: any) {
    this.commonService.deleteUser(user).subscribe(() => {
      this.getLatestUser();
    });
  }

  updateUser() {
    this.isEdit = !this.isEdit;
    this.commonService.updateUser(this.userObj).subscribe(() => {
      this.getLatestUser();
    });
  }
}
