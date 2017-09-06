import { Component, OnInit, OnChanges, Input, ViewEncapsulation, SimpleChange } from '@angular/core';

import { PortfolioProjectService } from '../portfolio-project.service';
import { PortfolioProject } from '../portfolio-project';

@Component({
    selector: 'app-portfolio-project-list',
    templateUrl: './portfolio-project-list.component.html',
    styleUrls: ['./portfolio-project-list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PortfolioProjectListComponent implements OnInit, OnChanges {
    projects:PortfolioProject[];

    @Input()
        type:string;

    @Input('projects')
        projectsBinding:PortfolioProject[];

    constructor(private projectsService:PortfolioProjectService) {
    }

    ngOnInit() {
        if (this.type == 'seeOtherProjects') {
            this.type = 'preview';
        }
        else {
            this.getProjectsList();
        }

    }

    ngOnChanges(changes:{ [propertyName: string]: SimpleChange }) {
        if (changes['projectsBinding']) {
            this.projects = changes['projectsBinding'].currentValue;
        }
    }

    getProjectsList() {
        this.projectsService
            .getList()
            .subscribe(projects => {
                this.projects = projects;
            })
    }
}
