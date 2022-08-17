import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AboutMe } from '../interfaces/interface';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-plusvault',
  templateUrl: './plusvault.component.html',
  styleUrls: ['./plusvault.component.scss']
})
export class PlusvaultComponent implements OnInit {

  aboutMe:AboutMe;

  constructor(private cs:CommonService) { }

  ngOnInit(): void {
    this.cs.getAboutMe().subscribe( aboutMe => {
      this.aboutMe = aboutMe;
    })
  }

}
