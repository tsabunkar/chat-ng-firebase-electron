import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInGroup: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    this.signInGroup = new FormGroup({
      emailControl: new FormControl('', [Validators.required]),
      passwordControl: new FormControl('', [Validators.required])
    });
  }

  onSignIn() {
    console.log(this.signInGroup);
  }

  signup() {
    this.router.navigate(['signup']);
  }
}
