import { NgModule } from '@angular/core';
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
    ImgLoadDirective,
    PageLoaderDirective
  ],
  exports: [
    ImgLoadDirective,
    PageLoaderDirective
  ]
})

export class CoreModule {
}
