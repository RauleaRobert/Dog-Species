import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreedsComponent } from './breeds/breeds.component';
import { SubBreedsComponent } from './sub-breeds/sub-breeds.component';
import { SubBreedsImgComponent } from './sub-breeds-img/sub-breeds-img.component';

@NgModule({
  declarations: [
    AppComponent,
    BreedsComponent,
    SubBreedsComponent,
    SubBreedsImgComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
