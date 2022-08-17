import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AboutMe } from '../interfaces/interface';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-birdbooks',
  templateUrl: './birdbooks.component.html',
  styleUrls: ['./birdbooks.component.scss']
})
export class BirdbooksComponent implements OnInit {

  aboutMe:AboutMe;

  constructor(private cs:CommonService) { }

  ngOnInit(): void {
    this.cs.getAboutMe().subscribe( aboutMe => {
      this.aboutMe = aboutMe;
    })
  }

}
