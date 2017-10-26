import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {
    


  constructor(private auth: AuthService, private router: Router) { }

  canActivate() {
     return this.auth.user$.map(user => {
      if(user) return true;

      this.router.navigate(['/login']);
      return false;
     });
    }

}
