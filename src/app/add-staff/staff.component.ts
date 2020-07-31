import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { StaffService } from '../staff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
})
export class StaffComponent implements OnInit {
  staffForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private staffService: StaffService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.staffForm = this.fb.group({
      staffName: [''],
      email: [''],
      password: [''],
      gender: [''],
      subscribe: [false],
      address: [''],
      city: [''],
      state: [''],
      zip: [''],
    });
  }
  onSubmit() {
    console.log(this.staffForm.value);
    this.staffService.addStaff(this.staffForm.value).subscribe(
      (response) => console.log('Success!', response),
      (error) => console.error('Error!', error)
    );
    this.router.navigate(['view']);
  }
}
