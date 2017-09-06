import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

import { PageLoaderService } from './page-loader.service';
import { PageLoader } from './page-loader';
import { ActivatedRoute } from '@angular/router';

@Directive({
  selector: '[app-page-loader]'
})
export class PageLoaderDirective implements OnInit {
  private appRootClass = '.app-root';
  private appPageLoadedClass = 'page-loaded';
  private appHideSpinnerClass = 'hide-spinner';

  @Input('app-page-loader')
    simpleTimeout: string;

  constructor(private element:ElementRef,
              private renderer:Renderer2,
              private loader:PageLoaderService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loader.state$.subscribe(loaderState => {

      if (loaderState.show) {
        this.addClass('no-transition');
        this.removeClass(this.appPageLoadedClass);
        this.removeClass(this.appHideSpinnerClass);
      }
      else {
        this.removeClass('no-transition');
        this.addClass(this.appPageLoadedClass);
        this.addClass(this.appHideSpinnerClass);
      }
    });

    this.route.params.subscribe(this.loadUponSimpleTimeout);
  }

  loadUponSimpleTimeout = () => {
    if (+this.simpleTimeout)
    {
      this.loader.showUponTimeout(+this.simpleTimeout)
    }
  }

  addClass(className:string, el = document.querySelector(this.appRootClass)) {
    this.renderer.addClass(el, className);
  }

  removeClass(className:string, el = document.querySelector(this.appRootClass)) {
    this.renderer.removeClass(el, className);
  }

}
