import { Directive, ElementRef, OnChanges, Input, Renderer2, SimpleChange } from '@angular/core';

@Directive({
  selector: '[app-img-load]'
})
export class ImgLoadDirective implements OnChanges {
  private imgLoadedClass = 'img-loaded';

  @Input('app-img-load')
    src:string;

  constructor(private element:ElementRef, private renderer:Renderer2) {
  }

  onLoaded = () => {
    this.addClass(this.imgLoadedClass);
  }

  updateSrc(src) {
    let el = this.element.nativeElement;
    if (el.tagName === 'IMG' && src) {
      el.src = src;
      this.addClass('app-img-load');
      if (el.complete)
        this.onLoaded();
      else {
        this.removeClass(this.imgLoadedClass);
        el.removeEventListener('load', this.onLoaded);
        el.addEventListener('load', this.onLoaded);
      }
    }
  }

  ngOnChanges(changes:{ [propertyName: string]: SimpleChange }) {
    if (changes['src']) {
      this.updateSrc(changes['src'].currentValue);
    }
  }

  addClass(className:string) {
    this.renderer.addClass(this.element.nativeElement, className);
  }

  removeClass(className:string) {
    this.renderer.removeClass(this.element.nativeElement, className);
  }

}
