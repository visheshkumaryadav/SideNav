import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  faLock = faLock;
  registerForm: any = FormGroup;
  submitted = false;
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
      name: ['', [Validators.required]],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      cPassword: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    const data = this.registerForm.value;

    this.auth.signUp(data).subscribe(
      (response) => {
        console.log(response); // Handle the response from the backend API
        alert("Registertion Detalis Save successfully!");
        this.router.navigate(['/login']);
      },

    );
  }
}


