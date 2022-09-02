export interface AboutMe {
  data: {
    attributes: {
      Name:string;
      BioSubtitle:string;
      BioDescription:string;
      LinkedInLink:string;
      GithubLink:string;
      JobTitle:string;
      WhatILike1:string;
      WhatILike2:string;
      WhatILike3:string;
      HeadShot: {
        data: {
          attributes: {
            url:string;
          }
        }
      },
      BackShot: {
        data: {
          attributes: {
            url:string;
          }
        }
      }
    }
  }
}

export interface AboutMeCards {
  data:AboutMeCard[];
}

export interface AboutMeCard {
  id:number;
  attributes: {
    Title:string;
    Description:string;
    Icon: {
      data: {
        attributes: {
          url:string;
        }
      }
    }
  }
}

export interface Testimonials {
  data:Testimonial[]
}

export interface Testimonial {
  id:number;
  attributes: {
    Name:string;
    Testimonial:string;
    JobTitle:string;
    VanArts_instructor_link:string
    Image: {
      data: {
        attributes: {
          url:string;
        }
      }
    }
  }
}

export interface Project {
  id:number;
  attributes: {
    Title:string;
    Summary:string;
    Startdate:string;
    EndDate:string;
    WebsiteLink:string;
    Github_CaseStudy_Link:string;
    ProjectsImage: {
      data: {
        attributes: {
          url:string;
        }
      }
    },
    technology_useds: {
      data: [
        {
          attributes: {
            TechnologyName:string;
          }
        }
      ]
    },
    projects_category: {
      data: {
        id:number;
        attributes: {
          CategoryName:string;
        }
      }
    },
    ProjectGIF: {
      data: {
        attributes: {
          url:string;
        }
      }
    }
  }
}

export interface ProjectsByCategory {
  data:[
    {
      attributes:{
        CategoryName:string;
        projects:{
          data:Project[];
        }
      }
    }
  ]
}

export interface Projects {
  data:Project[];
}

export interface Skill {
  id:number;
  attributes: {
    SkillName:string;
    SkillLogo: {
      data: {
        attributes: {
          url:string;
        }
      }
    }
  }
}

export interface Skills {
  data:Skill[];
}


