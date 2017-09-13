import { Component, HostBinding, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

import { Router, NavigationStart } from '@angular/router';

import { contactPageShutterAnimation } from '../_animations/contactPageShutter.animation';
import { contactPageBackgropImageAnimation } from '../_animations/contactPageBackdropImage.animation';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    contactPageShutterAnimation,
    contactPageBackgropImageAnimation]
})
export class ContactPageComponent implements OnInit, OnDestroy {
  @HostBinding('@contactPageShutterAnimation') triggerAnimation;

  subscribers = [];

  // FIXME: need to be set manually because of bug in Angular 4 on :leave transition
  backdropAnimationState = 'active';

  constructor(private router:Router) {}

  ngOnInit() {
  //  this.subscribers.push(this.router
  //    .events
  //    .subscribe((e:NavigationStart) => {
  //      if (e instanceof NavigationStart) {
  //        setTimeout(() => this.backdropAnimationState = 'inactive');
  //      }
  //    }));
  }

  ngOnDestroy() {
    this.subscribers.forEach(_ => _.unsubscribe());
  }
}
