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

  ngOnInit(): void {
    this.cs.getAboutMe().subscribe( aboutMe => {
      this.aboutMe = aboutMe;
    })
  }

}
