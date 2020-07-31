import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Staff } from '../staff';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css'],
})
export class ViewStaffComponent implements OnInit {
  public staffs: Observable<Staff[]>;

  constructor(private staffService: StaffService, private router: Router) {}

  ngOnInit(): void {
    this.reloadList();
  }
  // viewStaff() {
  //   this.staffService.getStaffList().subscribe((data) => (this.staffs = data));
  // }
  reloadList() {
    this.staffService.getStaffList().subscribe((data) => (this.staffs = data));
  }
  deleteStaff(id: number) {
    this.staffService.deleteStaff(id).subscribe(
      (data) => {
        this.reloadList();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  updateStaff(id: number) {
    this.router.navigate(['update', id]);
  }
  staffInfo(id: number) {
    this.router.navigate(['info', id]);
  }
  goToAddStaff() {
    this.router.navigate(['add']);
  }
}
