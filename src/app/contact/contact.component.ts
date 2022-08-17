import { Component, OnInit } from '@angular/core';
import { AboutMe } from '../interfaces/interface';
import { CommonService } from '../services/common.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  aboutMe:AboutMe;

  name = "";
  email="";
  message="";
  formInvalid = true;
  formMessageHidden = true;


  constructor(private cs:CommonService) { }

  submit(form: NgForm) {
    let newlead = {
      "data": {
        "Name": this.name,
        "Email": this.email,
        "Message": this.message
      }
    }
    this.cs.postLead(newlead).subscribe(res => {
      console.log(res)
      this.formMessageHidden = false;
      // this.name = "";
      // this.email = "";
      // this.message = "";
      form.resetForm();
    })
  }

  resolved(event:any) {
    if(event) {
      this.formInvalid = false;
    }
  }

  ngOnInit(): void {
    this.cs.getAboutMe().subscribe( aboutMe => {
      this.aboutMe = aboutMe;
    })
  }

}
