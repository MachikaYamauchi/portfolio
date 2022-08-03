export interface AboutMe {
  data: {
    attributes: {
      Name:string;
      Email:string;
      BioSubtitle:string;
      BioDescription:string;
      LinkedInLink:string;
      GithubLink:string;
      JobTitle:string;
      Quote:string;
      WhatILike1:string;
      WhatILike2:string;
      WhatILike3:string;
      Logo: {
        data:{
          attributes: {
            url:string;
          }
        }
      },
      HeadShot: {
        data: {
          attributes: {
            url:string;
          }
        }
      },
      HomeHeroImage: {
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
      },
      Resume: {
        data: {
          attributes: {
            url:string;
          }
        }
      },
      Arrow_White_Right: {
        data: {
          attributes: {
            url:string;
          }
        }
      },
      Arrow_Orange_Right: {
        data: {
          attributes: {
            url:string;
          }
        }
      },
      Arrow_Orange_45deg: {
        data: {
          attributes: {
            url:string;
          }
        }
      },
      Arrow_Orange_Left: {
        data: {
          attributes: {
            url:string;
          }
        }
      },
      Arrow_Navy_Bottom: {
        data: {
          attributes: {
            url:string;
          }
        }
      },
      Arrow_Navy_Right: {
        data: {
          attributes: {
            url:string;
          }
        }
      },
      HomeProject1: {
        data: {
          attributes: {
            url:string;
          }
        }
      },
      HomeProject2: {
        data: {
          attributes: {
            url:string;
          }
        }
      },
      HomeProject3: {
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
    Description:string;
    Startdate:string;
    EndDate:string;
    WebsiteLink:string;
    Slug:string;
    ProjectsHero: {
      data: {
        attributes: {
          url:string;
        }
      }
    },
    DetailsPageHero: {
      data: {
        attributes: {
          url:string;
        }
      }
    },
    DetailsPageImages: {
      data: [
        {
          attributes: {
            url:string;
          }
        }
      ]
    }
    technology_useds: {
      data: [
        {
          attributes: {
            TechnologyName:string;
          }
        }
      ]
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
    SkillScore:string;
    SkillLogo: {
      data: {
        attributes: {
          url:string;
        }
      }
    }
  }
}


