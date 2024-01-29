import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  isGSTDisabled: boolean = true;
  selectedBusinessType:any;
  showCOIField: boolean = true;

  toggleCOIField() {
    this.showCOIField = this.selectedBusinessType !== 'propriotor' && this.selectedBusinessType !== 'partnership';
  }

  toggleGST() {
    this.isGSTDisabled =!this.isGSTDisabled;
  }
  
  personalInfo = {
    aadhar: '',
    pan: '',
    name:'',
    fathername:'',
    dob:'',
    mobile:'',
    email:'',
    address:'',
    // Add other form fields (name, father name, dob, mobile no, emailId)
  };
  businessInfo = {
    btype: '',
    name: '',
    pan:'',
    coi:'',
    gst:'',
    checked:''
    // Add other form fields (name, father name, dob, mobile no, emailId)
  };
  bankInfo = {
    account: '',
    ifsc: '',
    bank:'',
    // Add other form fields (name, father name, dob, mobile no, emailId)
  };
  selectedForm: string = 'personal'; 
  submitPersonalInfo() {
    // Handle personal info form submission logic
  }
  submitBusinessInfo() {
    // Handle business info form submission logic
  }
  submitBankInfo() {
    // Handle business info form submission logic
  }
  submitactivityInfo() {
    // Handle business info form submission logic
  }
  showForm(formType: string) {
    this.selectedForm = formType;
  }
  
}
