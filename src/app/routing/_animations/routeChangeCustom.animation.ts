// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const routeChangeCustomAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('routeChangeCustomAnimation', [

    // route 'enter' transition
    transition(':enter', [

     style({position: 'fixed', top: '52px', left: '-100%', width: '100vw', 'z-index':'998'}),

     // animation and styles at end of transition
     animate('.5s 300ms ease-in', style({left: 0}))

    ]),

    transition(':leave', [

      style({position: 'fixed', top: '52px', left: 0, width: '100vw', 'z-index':'999'}),

      // animation and styles at end of transition
      animate('.3s ease-out', style({left: '100%'}))
    ]),
  ]);
