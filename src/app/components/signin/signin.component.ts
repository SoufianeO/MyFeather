import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  
  signinForm: FormGroup;
  errorMessage : string;
  userName : string;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {
      this.signinForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
      });
     }

  ngOnInit() {
  }

  onSubmit() {
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;
    
    this.authService.signInUser(email, password).then(
      () => { 
        this.authService.getUsernameByGmail().subscribe( datasnapshot => {
         
          datasnapshot.forEach( snapshot => {
              let user = snapshot.payload.val();
              if(user["email"] == email ){
                this.userName = user["username"];
                this.authService.setUsername(this.userName);
                this.router.navigate(['/tabs/tab1']);
              }
          });
        })
        
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

}

