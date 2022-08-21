import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../services/common.service';
import { environment } from 'src/environments/environment.prod';
import { Project } from '../interfaces/interface';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  project:Project;
  projectTitle:string = "";
  heroImage:string = "";
  projectDescription:string = "";
  technologyUsed:any[] =[];
  loading = true;
  showElement = false;
  server = environment.server;

  isGithub:boolean = false;
  isWebDevRouterLink = false;

  constructor(private cs:CommonService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id:any = this.route.snapshot.paramMap.get("id");
    this.cs.getProjectByID(id).subscribe(res => {
      this.loading = false;
      this.showElement = true;
      this.project = res.data;
      console.log(this.technologyUsed);
      if(res.data.attributes.GithubLink == null) {
        this.isGithub = true;
      }
      if(res.data.attributes.WebsiteLink === "") {
        this.isWebDevRouterLink = true;
      }
    })
  }

}
