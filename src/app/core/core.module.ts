import { NgModule } from '@angular/core';
import { API } from './api/api.service';
import { StopPropagationDirective } from './stop-propagation/stop-propagation.directive';
import { ImgLoadDirective } from './img-load/img-load.directive';
import { PageLoaderDirective } from './page-loader/page-loader.directive';
import { PageLoaderService } from './page-loader/page-loader.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
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
