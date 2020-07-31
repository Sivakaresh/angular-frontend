import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Staff } from '../staff';

@Component({
  selector: 'app-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.css'],
})
export class UpdateStaffComponent implements OnInit {
  staff: Staff;
  id: number;
  constructor(
    private route: ActivatedRoute,
    private staffService: StaffService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.staff = new Staff();
    this.id = this.route.snapshot.params['id'];
    this.staffService.getStaff(this.id).subscribe(
      (data) => {
        console.log(data);
        this.staff = data;
      },
      (error) => console.log(error)
    );
  }
  onSubmit() {
    this.staffService.updateStaff(this.id, this.staff).subscribe(
      (data) => console.log('updated'),
      (error) => console.log(error)
    );
    this.router.navigate(['view']);
  }
}
