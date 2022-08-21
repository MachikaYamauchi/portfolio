import { Component, OnInit } from '@angular/core';
import { AboutMe, Project, Skill } from '../interfaces/interface';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'portfolio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  aboutMe:AboutMe;

  constructor(private cs:CommonService) {
  }


  ngOnInit(): void {
    this.cs.getAboutMe().subscribe( aboutMe => {
      this.aboutMe = aboutMe;
    })
  }

}
