import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupGuardService } from '@core/guards/singup.guard.service';
import { LoggedInGuard } from './guards/auth.guard';
import { ElderlyGuard } from './guards/elderly.guard';
import { VolunteerGuard } from './guards/volunteer.guard';
 
  const loadLoginModule = () =>
  import('./login/login.module').then(m => m.LoginModule);
  const loadLandingModule = () =>
  import('./landing/landing.module').then(m => m.LandingModule);
  const loadElderlyModule = () =>
  import('./elderly/elderly.module').then(m => m.ElderlyModule);
  const loadVolunteerModule = () =>
  import('./volunteer/volunteer.module').then(m => m.VolunteerModule);
const routes: Routes = [
  {
    path:'',
    loadChildren:loadLandingModule,
    canActivate:[LoggedInGuard],
  },

  {
    path:'auth',
    loadChildren:loadLoginModule,
    canActivate:[LoggedInGuard],
  },
  {
    path:'elderly',
    canActivate:[SignupGuardService,ElderlyGuard],
    loadChildren:loadElderlyModule,
    //canActivate:[LoggedInGuard],
  },
  {
    path:'volunteer',
    canActivate:[SignupGuardService,VolunteerGuard],
    loadChildren:loadVolunteerModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
