import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;
  constructor(
    private router: Router, 
    private authService: AuthService,
    private activatedRoute:ActivatedRoute,
    ) { }

  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe(result => { 
        if (result){
          let returnUrl=this.activatedRoute.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/']);
        }
        else  
          this.invalidLogin = true; 
      });
  }
}
