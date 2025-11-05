import { Component } from '@angular/core';
import { FormGroup , FormControl,Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Auth } from '../../service/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  constructor(private _authService:Auth , private _router:Router) {}

  registerForm:FormGroup=new FormGroup({
    'firstName':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern('^[a-zA-Z]+$')]),
    'lastName':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern('^[a-zA-Z]+$')]),     
    'age':new FormControl(null,[Validators.required,Validators.min(16),Validators.max(80)]),
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z0-9]{5,10}$')]),
  });

  errorMessage:string='';
  isLoading:boolean=false;
submitRegisterForm(registerForm:FormGroup){
  this.isLoading=true;
    this._authService.register(registerForm.value).subscribe({
      next:(response)=>{
        this.isLoading=false;
        if(response.message=='User created successfully'){
          this._router.navigate(['/login']);
        }
      },
      error:(err)=>{
        this.errorMessage=err.error.message;
      },
      complete:()=>{
        console.log('Registration request completed');
      }
    }); 
  }

}
