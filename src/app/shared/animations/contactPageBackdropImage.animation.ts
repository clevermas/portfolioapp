// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const contactPageBackgropImageAnimation =
  trigger('contactPageBackgropImageAnimation', [

    state('*', style({
      opacity: 1,
      transform: 'scale(1.05)'
    })),

    state('void', style({
      opacity: 0,
      transform: 'scale(1)'
    })),

    transition('* => void', animate('300ms ease-out')),

    transition('void => *', animate('1s 800ms ease-in'))
  ]);
