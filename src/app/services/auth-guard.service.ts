import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private service:AuthService,
              private router:Router) { }

  canActivate(route,state:RouterStateSnapshot){
   if(this.service.isLoggedIn())
   return true;

   this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}});
   return false;
  }

  }
