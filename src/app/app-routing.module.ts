import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './add-staff/staff.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { UpdateStaffComponent } from './update-staff/update-staff.component';
import { InfoStaffComponent } from './info-staff/info-staff.component';

const routes: Routes = [
  { path: '', redirectTo: 'view', pathMatch: 'full' },
  { path: 'add', component: StaffComponent },
  { path: 'view', component: ViewStaffComponent },
  { path: 'update/:id', component: UpdateStaffComponent },
  { path: 'info/:id', component: InfoStaffComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  StaffComponent,
  ViewStaffComponent,
  UpdateStaffComponent,
  InfoStaffComponent,
];
