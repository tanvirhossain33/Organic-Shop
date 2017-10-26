import { Router } from '@angular/router';
import { ReturnStatement } from '@angular/compiler';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService, router: Router){
    auth.user$.subscribe(user => {
      if(user){
        let returnUrl = localStorage.getItem('ReturnStatement');
        router.navigateByUrl(returnUrl);
      }
    });
  }
}
