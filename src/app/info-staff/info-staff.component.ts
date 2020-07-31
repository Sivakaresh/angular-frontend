import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StaffService } from '../staff.service';
import { Observable } from 'rxjs';
import { Staff } from '../staff';

@Component({
  selector: 'app-info-staff',
  templateUrl: './info-staff.component.html',
  styleUrls: ['./info-staff.component.css'],
})
export class InfoStaffComponent implements OnInit {
  public staff: Staff;
  id: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private staffService: StaffService
  ) {}

  ngOnInit(): void {
    this.staff = new Staff();
    this.id = this.route.snapshot.params['id'];
    this.staffService
      .getStaff(this.id)
      .subscribe((data) => (this.staff = data));
  }
  viewList() {
    this.router.navigate(['view']);
  }
}
