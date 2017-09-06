import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
  subscribers = [];
  shutterExpanded: boolean;
  url: string

  constructor(private route:ActivatedRoute, private router:Router) {
  }

  ngOnInit() {
    this.subscribers.push(this.route
      .queryParams
      .subscribe(params => {
        this.shutterExpanded = params['shutter'] === 'expanded';
      }));

    this.subscribers.push(this.router
      .events
      .subscribe((e:NavigationEnd) =>
      {
        if (e instanceof NavigationEnd)
        {
          this.url = e.url.replace(/\?.*$/, '');
        }
      }));
  }

  ngOnDestroy() {
    this.subscribers.forEach(_ => _.unsubscribe());
  }

  expand() {
    if (this.shutterExpanded)
    {
      this.router.navigate(['/']);
    }
  }
}
