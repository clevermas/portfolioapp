// import the required animation functions from the angular animations module
import { trigger, state, animate, query, transition, group, animateChild, style } from '@angular/animations';

export const routeAnimation = trigger('routeAnimation', [
  transition('GalleryPage <=> HomePage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw'
      })
    ]),
    query(':enter', [
      style({ top: '-150%' })
    ]),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ top: '-150%' }))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ top: '0%' }))
      ])
    ])
  ])
]);
