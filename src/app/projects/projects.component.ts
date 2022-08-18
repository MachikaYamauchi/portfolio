import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { environment } from 'src/environments/environment.prod';
import { AboutMe, Project, ProjectsByCategory } from '../interfaces/interface';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  aboutMe:AboutMe;
  projects:ProjectsByCategory;
  loading = true;
  showElement = false;

  server = environment.server;

  constructor(private cs:CommonService) { }

  ngOnInit(): void {
    // this.loading = true;
    this.cs.getAboutMe().subscribe( aboutMe => {
      this.aboutMe = aboutMe;
    })

    this.cs.getProjectsByCategory().subscribe(res => {
      this.loading = false;
      this.showElement = true;
      this.projects = res;
      console.log(this.projects);
    })
  }

}
