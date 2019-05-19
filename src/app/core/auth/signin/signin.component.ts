import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInGroup: FormGroup;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.signInGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSignIn() {
    console.log(this.signInGroup);
    this.authService.signInWithLocalCredentials(this.signInGroup.value);
  }

  redirectToSignup() {
    this.router.navigate(['signup']);
  }
}
