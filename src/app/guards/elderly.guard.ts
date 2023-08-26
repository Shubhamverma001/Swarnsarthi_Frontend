import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
//import {map} from 'rxjs/operators';
import {BackendService} from '../services/backend.service';
import { of } from 'rxjs';
import { RoleType } from '@core/enums';
 
@Injectable({
  providedIn: 'root',
})
export class ElderlyGuard implements CanActivate {
  constructor(
    private readonly backendService: BackendService,
    private readonly router: Router,
  ) {}
 
  canActivate() {
    const res = this.backendService.isLoggedIn(); 
    if(res)
    {
        const user = this.backendService.getSavedUser();
        if(user.role === RoleType.Elderly)
        {
            return of(res);
        }
        else if(user.role === RoleType.Volunteer)
        {
            this.router.navigate(['volunteer'])
            return of(false);
        }
    }
    return of(res);
  }

}
 