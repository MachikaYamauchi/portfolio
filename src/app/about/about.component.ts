import { Component, OnInit } from '@angular/core';
import { AboutMe, AboutMeCard, Testimonial } from '../interfaces/interface';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutMe:AboutMe;
  aboutMeCards:AboutMeCard[] = [];
  testimonials:Testimonial[] =[];
  loading = true;
  showElement = false;


  constructor(private cs:CommonService) { }

  ngOnInit(): void {
    this.cs.getAboutMe().subscribe( aboutMe => {
      this.aboutMe = aboutMe;
    })

    this.cs.getAboutMeCards().subscribe(cards => {
      this.loading = false;
      this.showElement = true;
      this.aboutMeCards = cards.data;
    })

    this.cs.getTestimonials().subscribe(testimonials => {
      this.testimonials = testimonials.data;
    })
  }

}
