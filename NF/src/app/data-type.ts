export interface SignUp{
    name:String,
    password:String,
    emailId:String
}

export interface login{
    emailId:String,
    password:String
}

export interface personalInfo{
    aadhar:number,
    pan:String,
    name:string,
    fathername:string,
    dob:Date,
    mobile:number,
    email:string,
    address:string,
  }
  export interface  businessInfo{
    account: number,
    ifsc: string,
    bank:string,
    // Add other form fields (name, father name, dob, mobile no, emailId)
  };