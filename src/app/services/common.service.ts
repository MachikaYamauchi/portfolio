import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { AboutMe, AboutMeCards, Project, Projects, ProjectsByCategory, Skill, Skills, Testimonials } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private url = environment.server;

  constructor(private http:HttpClient) { }

  getAboutMe() {
    return this.http.get<AboutMe>(this.url + "/api/about-me?populate=deep,5")
  }

  getAboutMeCards() {
    return this.http.get<AboutMeCards>(this.url + "/api/about-me-cards?populate=deep,3")
  }

  getTestimonials() {
    return this.http.get<Testimonials>(this.url + "/api/testimonials?populate=deep,3")
  }

  getSkills() {
    return this.http.get<Skills>(this.url + '/api/skills?populate=deep,3')
  }


  getProjectsByCategory() {
    return this.http.get<ProjectsByCategory>(this.url + "/api/projects-categories?populate=deep,3")
  }

  getProjects() {
    return this.http.get<{data:Project[]}>(this.url + "/api/projects?populate=deep,3")
  }

  getProjectByID(id:number) {
    return this.http.get<{data:Project}>(this.url + "/api/projects/" + id + "?populate=deep,3")
  }

  postLead(data:any) {
    return this.http.post(this.url + "/api/leads", data);
  }


}
