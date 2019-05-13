import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Injectable()
export class AdminAuthGuardService implements CanActivate{

  constructor(private service:AuthService,
              private router:Router) { }

  canActivate(){
    if(this.service.currentUser.admin)
      return true;
    
    
    this.router.navigate(['/no-access']);
  }

}
