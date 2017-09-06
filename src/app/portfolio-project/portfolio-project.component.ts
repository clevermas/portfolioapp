import { Component, OnInit, OnChanges, Input, SimpleChange} from '@angular/core';
import { PortfolioProject } from './portfolio-project';

@Component({
  selector: 'app-portfolio-project',
  templateUrl: './portfolio-project.component.html',
  styleUrls: ['./portfolio-project.component.scss'],
  inputs: [
    'type',
    'instance'
  ]
})
export class PortfolioProjectComponent implements OnInit, OnChanges {

  @Input()
    type:string;

  @Input()
    instance:PortfolioProject;

  typeClass:string = '';

  project:PortfolioProject = <PortfolioProject>{};

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes:{ [propertyName: string]: SimpleChange }) {
    for (let propName in changes) {
      switch (propName) {
        case 'instance':
          this.project = changes['instance'].currentValue;
          break;
        case 'type':
          this.typeClass = 'type-' + changes['type'].currentValue;
          break;
      }
    }
  }
}
