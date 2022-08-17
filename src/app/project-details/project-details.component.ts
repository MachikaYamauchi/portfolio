import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../services/common.service';
import { environment } from 'src/environments/environment.prod';
import { AboutMe, Project } from '../interfaces/interface';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  aboutMe:AboutMe;
  project:Project;
  projectTitle:string = "";
  heroImage:string = "";
  projectDescription:string = "";
  technologyUsed:any[] =[];
  server = environment.server;

  isGithub:boolean = false;
  isWebDevRouterLink = false;

  constructor(private cs:CommonService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id:any = this.route.snapshot.paramMap.get("id");
    this.cs.getProjectByID(id).subscribe(res => {
      this.project = res.data;
      console.log(this.technologyUsed);
      if(res.data.attributes.GithubLink == null) {
        this.isGithub = true;
      }
      if(res.data.attributes.WebsiteLink === "") {
        this.isWebDevRouterLink = true;
      }
    })

    this.cs.getAboutMe().subscribe( aboutMe => {
      this.aboutMe = aboutMe;
    })
  }

}
