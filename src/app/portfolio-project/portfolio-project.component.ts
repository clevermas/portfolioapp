import { Component, OnInit, OnChanges, Input, SimpleChange} from '@angular/core';
import { PortfolioProject } from './portfolio-project';

@Component({
  selector: 'app-portfolio-project',
  templateUrl: './portfolio-project.component.html',
  styleUrls: ['./portfolio-project.component.scss']
})
export class PortfolioProjectComponent implements OnInit, OnChanges {

  @Input()
    view:string;

  @Input('instance')
    project:PortfolioProject;

  viewClass:string = '';

  //project:PortfolioProject = <PortfolioProject>{};

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes:{ [propertyName: string]: SimpleChange }) {
    for (let propName in changes) {
      switch (propName) {
        case 'view':
          this.viewClass = 'view-' + changes['view'].currentValue;
          break;
      }
    }
  }
}
