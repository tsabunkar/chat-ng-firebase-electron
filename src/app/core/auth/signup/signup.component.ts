import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpGroup: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    this.signUpGroup = new FormGroup({
      emailControl: new FormControl('', [Validators.required]),
      passwordControl: new FormControl('', [Validators.required]),
      confirmPasswordControl: new FormControl('', [Validators.required])
    });
  }

  onSignUp() {
    console.log(this.signUpGroup);
  }

  signin() {
    this.router.navigate(['signin']);
  }
}
