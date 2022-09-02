import { Component, OnInit } from '@angular/core';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { environment } from 'src/environments/environment.prod';
import { AboutMe, Project, Skill } from '../interfaces/interface';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  heroHomeImage = "";
  skills:Skill[] = [];
  aboutMe:AboutMe;
  projects:Project[] = [];
  project1:Project;
  project2:Project;
  loading = true;
  showElement = false;
  displayImage = true;
  displayGif = false;
  server = environment.server;


  constructor(private cs:CommonService) {
    gsap.registerPlugin(ScrollTrigger);
  }

  display() {
    this.displayImage = false;
    this.displayGif = true;
  }

  ngOnInit(): void {
    this.cs.getAboutMe().subscribe( aboutMe => {
      this.aboutMe = aboutMe;
    })
    this.cs.getProjects().subscribe(projects => {
      this.loading = false;
      this.showElement = true;
      this.project1 = projects.data[0];
      this.project2 = projects.data[5];
    })
    this.cs.getSkills().subscribe( skills => {
      this.skills=skills.data;
    })
  }

}
