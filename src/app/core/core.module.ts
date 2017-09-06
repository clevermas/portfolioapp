import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { API } from './api/api.service';
import { StopPropagationDirective } from './stop-propagation/stop-propagation.directive';
import { ImgLoadDirective } from './img-load/img-load.directive';
import { PageLoaderDirective } from './page-loader/page-loader.directive';
import { PageLoaderService } from './page-loader/page-loader.service';

@NgModule({
  imports: [
    HttpModule
  ],
  providers: [
    API,
    PageLoaderService
  ],
  declarations: [
    StopPropagationDirective,
    ImgLoadDirective,
    PageLoaderDirective
  ],
  exports: [
    StopPropagationDirective,
    ImgLoadDirective,
    PageLoaderDirective
  ]
})

export class CoreModule {
}
