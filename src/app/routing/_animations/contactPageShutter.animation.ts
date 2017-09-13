// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const contactPageShutterAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('contactPageShutterAnimation', [

    // route 'enter' transition
    transition(':enter', [

     style({position: 'fixed', top: '-100%', left: '0', width: '100vw', 'z-index':'998'}),

     // animation and styles at end of transition
     animate('.5s 300ms ease-in', style({top: 0}))

    ]),

    transition(':leave', [

      style({position: 'fixed', top: '0', left: 0, width: '100vw', 'z-index':'999'}),

      // animation and styles at end of transition
      animate('.5s 300ms ease-out', style({top: '-100%'}))
    ])
  ]);
