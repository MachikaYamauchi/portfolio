import { Component, OnInit } from '@angular/core';
import { AboutMe } from '../interfaces/interface';
import { CommonService } from '../services/common.service';

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

  submit() {
    this.formInvalid = true;
    let newlead = {
      "data": {
        "Name": this.name,
        "Email": this.email,
        "Message": this.message
      }
    }
    this.cs.postLead(newlead).subscribe(res => {
      this.formMessageHidden = false;
    })
  }

  resolved(event:any) {
    // if "私はロボットではありません"にチェックが入ったら、eventに文字列がはいるので、入ったらチェックされたということで、formInvalidをfalseにして、submitボタンがクリックできるようにしている。
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
