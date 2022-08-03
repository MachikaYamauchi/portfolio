import { Component, OnInit } from '@angular/core';
import { AboutMe } from '../interfaces/interface';
import { CommonService } from '../services/common.service';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  aboutMe:AboutMe;

  constructor(private cs:CommonService) {
    gsap.registerPlugin(ScrollTrigger);
  }

  rotateLogo() {
    gsap.to('.logo', {
      rotation:360,
      scrollTrigger: {
        trigger: ".logo",
        start: 'top top',
        end: 'top 300px',
        scrub: true,

      }
    })
  }

  ngOnInit(): void {
    this.cs.getAboutMe().subscribe( aboutMe => {
      this.aboutMe = aboutMe;
    })

  }

}
