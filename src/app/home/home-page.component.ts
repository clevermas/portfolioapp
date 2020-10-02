import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnDestroy {
  subscribers = [];

  ngOnDestroy() {
    this.subscribers.forEach(_ => _.unsubscribe());
  }
}
