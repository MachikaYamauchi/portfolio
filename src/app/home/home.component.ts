import { AfterViewInit, Component, OnInit } from '@angular/core';
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
  project3:Project;
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
  // slideTitle () {
  //   const title_clip = document.querySelectorAll('.title_clip');

  //   title_clip.forEach((title_clip, index) => {
  //     gsap.to(title_clip, {
  //       scrollTrigger: {
  //         trigger: title_clip,
  //         start: 'top-=350 center+=100',
  //         end: 'top top-=100',
  //       }
  //     });

  //     ScrollTrigger.create({
  //       trigger:title_clip,
  //       id: 'index+1',
  //       start: 'top center+=300',
  //       end: 'top top-=100',
  //       once: true,
  //       toggleClass: {
  //         targets: title_clip,
  //         className: 'slid__open',
  //       },
  //     });
  //   });

  //   const title_clip_line = document.querySelectorAll('.title_clip_line');

  //   title_clip_line.forEach((title_clip_line, index) => {
  //     gsap.to(title_clip_line, {
  //       scrollTrigger: {
  //         trigger: title_clip_line,
  //         start: 'top center+=300',
  //         end: 'top top',
  //       }
  //     });

  //     ScrollTrigger.create({
  //       trigger:title_clip_line,
  //       id: 'index+1',
  //       start: 'top center+=300',
  //       end: 'top top',
  //       once: true,
  //       toggleClass: {
  //         targets: title_clip_line,
  //         className: 'slid__open',
  //       },
  //     });
  //   });
  // }

  // slideProjectTitle () {
  //   const project_title_clip = document.querySelectorAll('.project_title_clip');

  //   project_title_clip.forEach((project_title_clip, index) => {
  //     gsap.to(project_title_clip, {
  //       scrollTrigger: {
  //         trigger: project_title_clip,
  //         start: 'top-=350 center+=100',
  //         end: 'top top-=100',
  //       }
  //     });

  //     ScrollTrigger.create({
  //       trigger:project_title_clip,
  //       id: 'index+1',
  //       start: 'top center+=300',
  //       end: 'top top-=100',
  //       once: true,
  //       toggleClass: {
  //         targets: project_title_clip,
  //         className: 'slid__open',
  //       },
  //     });
  //   });
  // }

  // Fade In from Bottom
  // fadein() {
  //   const fadeUps = document.querySelectorAll('.project_desc, .project_img, .projectsPageLink_btn, .skill_title, .skill_desc, .skill_container, .contactMessage, .contact_btn_wrapper');
  //   fadeUps.forEach((fadeUp, index) => {
  //     gsap.fromTo(fadeUp, {
  //       autoAlpha: 0,
  //       y:20,
  //     },
  //     {
  //       autoAlpha: 1,
  //       y: 0,
  //       scrollTrigger: {
  //         trigger: fadeUp,
  //         start: 'top center+=200',
  //         end: 'top top',
  //         // toggleActions: "play pause resume reverse",
  //       }
  //     });
  //     ScrollTrigger.create({
  //       trigger: fadeUp,
  //       id: 'index+1',
  //       start: 'top center+=200',
  //       end: 'top top',
  //       once: true,
  //       // toggleActions: "play pause resume reverse",
  //     });
  //   })
  // }


  // Background shows gradually FROM LEFT
  // slideBackgroundLeft () {
  //   gsap.fromTo('.project_bg1', {
  //       x: "0",
  //       scaleX: 0,
  //       scaleY: 1,
  //     },
  //     {
  //       x: '0',
  //       scaleX: 1,
  //       scrollTrigger: {
  //         trigger: '.project_wrapper1',
  //         start: 'top-=350 center+=100',
  //         end: 'bottom-=400 center+=100',
  //         scrub: 0.5,
  //         once: false,
  //       }
  //     }
  //   )
  //   gsap.fromTo('.project_bg3', {
  //     x: "0",
  //     scaleX: 0,
  //     scaleY: 1,
  //   },
  //   {
  //     x: '0',
  //     scaleX: 1,
  //     scrollTrigger: {
  //       trigger: '.project_wrapper3',
  //       start: 'top-=350 center+=100',
  //       end: 'bottom-=400 center+=100',
  //       scrub: 0.5,
  //       once: false,
  //     }
  //   }
  // )
  // }

  // Background shows gradually FROM RIGHT
  // slideBackgroundRight () {
  //   gsap.fromTo('.project_bg2', {
  //       x: "0",
  //       scaleX: 0,
  //       scaleY: 1,
  //     },
  //     {
  //       x: '0',
  //       scaleX: 1,
  //       scrollTrigger: {
  //         trigger: '.project_wrapper2',
  //         start: 'top-=350 center+=100',
  //         end: 'bottom-=400 center+=100',
  //         scrub: 0.5,
  //         once: false,
  //       }
  //     }
  //   )
  // }

  // textUp() {
  //   const text_ups = document.querySelectorAll('.text_up_js');

  //   text_ups.forEach((text_up, i) => {
  //       gsap.fromTo(text_up, {
  //         opacity:0.1,
  //         y: '110%',
  //       },
  //       {
  //         opacity:1,
  //         y: 0,
  //         duration: 0.9,
  //         delay: i * 0.03,
  //         scrollTrigger: {
  //           trigger: '.text_up',
  //           start: 'top center+100',
  //           end: 'top center+=100',
  //           once: true,
  //         }
  //       },
  //       )
  //   });
  // }

  ngOnInit(): void {
    this.cs.getAboutMe().subscribe( aboutMe => {
      this.aboutMe = aboutMe;
    })
    this.cs.getProjects().subscribe(projects => {
      this.loading = false;
      this.showElement = true;
      this.project1 = projects.data[0];
      this.project2 = projects.data[5];
      this.project3 = projects.data[1];
    })
    this.cs.getSkills().subscribe( skills => {
      this.skills=skills.data;
    })

    // this.slideTitle();
    // this.slideProjectTitle();
    // this.slideBackgroundLeft();
    // this.slideBackgroundRight();
    // this.fadein();
    // this.textUp();
  }

}
