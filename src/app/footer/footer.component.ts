import { Component, OnInit } from '@angular/core';
import { AboutMe, Project, Skill } from '../interfaces/interface';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  aboutMe:AboutMe;

  constructor(private cs:CommonService) { }

  ngOnInit(): void {
    this.cs.getAboutMe().subscribe( aboutMe => {
      this.aboutMe = aboutMe;
    })
  }

}
