// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const pageLoaderSpinnerAnimation =
  trigger('pageLoaderSpinnerAnimation', [
    state('loading', style({opacity: 1})),

    state('loaded', style({opacity: 0})),

    transition('loading <=> loaded', animate('.1s linear'))
  ]);

export const pageLoaderAnimation =
  trigger('pageLoaderAnimation', [
    state('loading', style({opacity: 0})),

    state('loaded', style({opacity: 1})),

    transition('loaded => loading', style({opacity: 0})),

    transition('loading => loaded', animate('.3s ease-out'))
  ]);
