import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Message } from 'src/app/core/constants/messages.constants';
import { Validators as Validation } from "src/app/core/constants/validators.constants";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup = new FormGroup({});
  isLoginFormSubmitted:boolean = false;

  validationGroup ={
    email : [
      {type:Validation.required,message:Message.required("Email")},
      {type:Validation.email,message:Message.email},
      {type:Validation.maxLength,message:Message.maxLength("Email",200)}
    ],
    password:[
      {type:Validation.required,message:Message.required("Password")},
      {type:Validation.minLength,message:Message.minLength("Password",6)}
    ]
  }
  
  constructor(public router: Router,private fb:FormBuilder){
    this.createLoginForm();
  }
  
  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email,Validators.maxLength(200)]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }

  login(){
    // this.isLoginFormSubmitted = true;
    // console.log(this.loginForm.controls['email'].errors)
    // if(this.loginForm.valid)
    // {
      
    // }
    this.router.navigate(['/app']);
  }
}
