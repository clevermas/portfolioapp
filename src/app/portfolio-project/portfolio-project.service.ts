import { Injectable } from '@angular/core';
import { API } from '../core/api/api.service';
import { Observable } from 'rxjs/Observable';
import { PortfolioProject } from './portfolio-project';

@Injectable()
export class PortfolioProjectService {

  PROJECTS_MOCKED = [
    <PortfolioProject>{
      id: 6,
      name: 'Good&Co',
      description: 'The startup from San Francisco and Boston I\'ve been working on a year. The app is based on Angular 1.5 with transforming to Angular 2 architecture originally kickstarted with Typescript.',
      thumbnails: {
        medium: 'assets/img/goodco-medium.png',
        large: 'assets/img/goodco-large.png'
      },
      url: 'https://good.co/'
    },
    <PortfolioProject>{
      id: 1,
      name: 'Callback Hero',
      description: 'One of my favourite works. Wonderful Landing page representing service providing callback buttons on each web page. The page has section with 4 steps and interactive grey path leading to them, which goes blue when you scroll to it. The reverse action is happend when scroll up. Another featured thing is a hero section with HTML5 video. I multiplied 1 video to 3 for each device type to optimise downloading time and therefore page performance. I used HTML5, CSS3, VanillaJS, jQuery, Bootstrap 3 with SCSS.',
      thumbnails: {
        medium: 'assets/img/callbackhero-medium.png',
        large: 'assets/img/callbackhero-large.png'
      }
    },
    <PortfolioProject>{
      id: 2,
      name: 'Deutschland Handy',
      description: 'Landing page for E-commerce project, specialized on selling cell-phones. A product page was developed with such technologies: HTML5, CSS3, Bootstrap 3, SCSS, jQuery. View was also integrated with Magento framework.',
      thumbnails: {
        medium: 'assets/img/deutschlandhandy-medium.png',
        large: 'assets/img/deutschlandhandy-large.png'
      }
    },
    <PortfolioProject>{
      id: 3,
      name: 'Dreamlease',
      description: 'Landing page of mobile phones sale integrated with Wordpress. Designed with custom theme, page based on HTML5 CSS3 and Twitter Booststrap 3. Client effects and carousels are handled with jQuery.',
      thumbnails: {
        medium: 'assets/img/dreamlease-medium.png',
        large: 'assets/img/dreamlease-large.png'
      }
    },
    <PortfolioProject>{
      id: 4,
      name: 'DSL Berater',
      description: 'Website developed for an independent comparison portal for internet, telephone & TV providers. The sitemap consists of is a pretty landing page, search and thank you page. Basic technologies used: HTML5, CSS3, Bootstrap 3, SCSS, jQuery',
      thumbnails: {
        medium: 'assets/img/dslberater-medium.png',
        large: 'assets/img/dslberater-large.png'
      }
    },
    <PortfolioProject>{
      id: 5,
      name: 'DSL Vertrag',
      description: 'DSL contract is an independent comparison and mediation portal. The user is able to search and compare internet, telephone & TV providers. Wordpress underlies the portal basis. The pages include Landing, Search, Checkout pages and also 3 pop-ups with forms and CSS3 animations.',
      thumbnails: {
        medium: 'assets/img/dslvertrag-medium.png',
        large: 'assets/img/dslvertrag-large.png'
      }
    },
    <PortfolioProject>{
      id: 7,
      name: 'Restposten Export',
      description: 'One of my beautiful landing pages. Service exports goods to East Europe. Amazing header with HTML5 video, sections using clean markup and minimalistic design, quick navigation upon whole page with sticky header.',
      thumbnails: {
        medium: 'assets/img/restposten-export-medium.png',
        large: 'assets/img/restposten-export-large.png'
      }
    },
    <PortfolioProject>{
      id: 8,
      name: 'UG',
      description: 'Service is the expert for company foundations and the first smart service partner for operational management. I developed langing page and integrated it with Wordpress.',
      thumbnails: {
        medium: 'assets/img/ug-medium.png',
        large: 'assets/img/ug-large.png'
      }
    }
    //,
    //<PortfolioProject>{
    //  id: 9,
    //  name: 'Handyratenkauf',
    //  description: 'E-commerce project target to cell phones sale. I developed landing page using HTML5, CSS3, Bootstap 3, SCSS, jQuery. The page was integrated with Wordpress, after which users can select products from catalog.',
    //  thumbnails: {
    //    medium: 'assets/img/handyratenkauf-medium.png',
    //    large: 'assets/img/handyratenkauf-large.png'
    //  }
    //}
  ];

  getList():Observable<PortfolioProject[]> {
    return this.api.get('', {mocked: true, mockedData: this.PROJECTS_MOCKED})
  }

  constructor(private api:API) {
  }

}
