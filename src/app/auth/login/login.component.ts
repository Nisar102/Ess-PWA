import { EssService } from './../../services/ess.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  LoginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private _apiService: EssService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.LoginForm = this.fb.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  OnSubmit() {

    this._apiService.Login(this.LoginForm.controls['Username'].value, this.LoginForm.controls['Password'].value).subscribe(r => {
      this.router.navigate(['home']);
    }, (error: HttpErrorResponse) => {
      console.log(error.error);
    });
  }


}
