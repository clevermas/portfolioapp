import { Component, ViewEncapsulation, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioProjectService } from '../../portfolio-project/portfolio-project.service';
import { PortfolioProject } from '../../portfolio-project/portfolio-project';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-project-page',
    templateUrl: './project-page.component.html',
    styleUrls: ['./project-page.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ProjectPageComponent implements OnInit, OnDestroy {
    otherProjects:PortfolioProject[];
    project:PortfolioProject = <PortfolioProject>{};
    id:number;
    private subscribers:any = [];
    private projectServiceSubscriber:any = {
        unsubscribe: () => {
        }
    };

    constructor(private projectsService:PortfolioProjectService,
                private route:ActivatedRoute) {
    }

    ngOnInit() {
        this.subscribers.push(
            this.route.params.subscribe(params => {
                this.id = +params['id'];
                this.getCurrentProjectData();
            }));
    }

    ngOnDestroy() {
        this.unsubscribeAll();
    }

    getCurrentProjectData() {

        this.projectServiceSubscriber = this.projectsService
            .getList()
            .finally(() => {
                this.projectServiceSubscriber.unsubscribe();
            })
            .subscribe($projects => {
                let projects = [].concat($projects);
                projects.map(
                    (project:PortfolioProject, i) =>
                    {
                        if (project.id === this.id)
                        {
                            this.project = project;
                            projects.splice(i, 1);
                            this.otherProjects = projects;
                        }

                    });
            });
    }

    unsubscribeAll() {
        this.subscribers.forEach(_ => _.unsubscribe());
    }

}
