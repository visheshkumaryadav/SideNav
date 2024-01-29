import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faLock = faLock;
  registerForm: any = FormGroup;
  submitted = false;
  showPassword = false;
  url: SafeUrl | undefined;
  get f() { return this.registerForm.controls; }

  hide = true;

  togglePassword() {
    this.hide = !this.hide;
  }

  constructor(
    private auth: AuthServiceService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    //Add User form validations
    this.registerForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    // if (this.auth.isLoggedIn()) {
    //   this.router.navigate(['admin']);
    // }
  }
  // onSubmit(): void {
  //   if (this.registerForm.valid) {
  //     this.auth.login(this.registerForm.value).subscribe(
  //       (result) => {
  //         console.log(result);
  //         this.router.navigate(['/admin']);
  //       },
  //       (err: Error) => {
  //         alert(err.message);
  //       }
  //     );
  //   }
  // }

  onSubmit(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log('Form is invalid. Aborting submission.');
      return;
    }

    const formData = this.registerForm.value;
    console.log('Form data:', formData);

    this.auth.login(formData).subscribe(
      (response: any) => {
        console.log('API Response:', response);
        // if (response && response.body && response.body.length === 1) {
        //   // this.isLoginError.emit(false)
        //   localStorage.setItem('login1', JSON.stringify(response.body))
        //   alert("Login successfully Done");
        //   this.router.navigate(['/admin'])
        // } else {
        //   console.warn("login failed");
        //   // this.isLoginError.emit(true)
        // }
        alert("Login successfully Done");
        this.router.navigate(['/admin/dashboard']);
      },
      (error: any) => {
        console.error('API Error:', error);
        alert('User emailId or password are incorrect! Please try again.');
      }
    );
  }


}
