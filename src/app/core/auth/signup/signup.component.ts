import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpGroup: FormGroup;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.signUpGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmpassword: new FormControl('', [Validators.required])
    });
  }

  onSignUp() {
    console.log(this.signUpGroup.value);
    this.authService.signUpNewUser(this.signUpGroup.value);
  }

  redirectToSignin() {
    this.router.navigate(['signin']);
  }
}
