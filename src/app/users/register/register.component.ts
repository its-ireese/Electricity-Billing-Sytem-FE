import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: any = {
    first_name: null,
    last_name: null,
    username: null,
    email: null,
    password: null,
    address: null, 
    contact: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { first_name, last_name, username, email, password, address, contact } = this.form;

    this.authService.register(first_name, last_name, username, email, password, address, contact).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        if((this.isSuccessful = true) || (this.isSignUpFailed = false)) {
          this.router.navigate(['login'])
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}

// sessionStorage.setItem('userId', ""+response.id);
//         sessionStorage.setItem('userLevel', response.userType);
//         this.authService.isLoggedIn = true;
        
//         if(response.userType = "manager"){
//           this.router.navigate(['']);
//         }else if(response.userType = "employee") {
//            this.router.navigate([''])