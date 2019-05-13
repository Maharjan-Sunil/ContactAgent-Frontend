import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'app/services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service:RegisterService,
              private route:Router) { }

  ngOnInit() {
  }

  signUp(credentials){
    this.service.register(credentials).subscribe();
    this.route.navigate(['/login']);
  }


}
