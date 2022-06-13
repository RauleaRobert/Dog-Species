import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { InputTextModule } from 'primeng/inputtext';


// Components imports
import { AppRoutingModule } from './app-routing.module';  // --> Router Module
import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { BreedComponent } from './breed/breed.component';
import { SubBreedComponent } from './sub-breed/sub-breed.component';
import { SearchFilterPipe } from './search-filter.pipe'; // --> Search Pipe
import { HighlightDirective } from './highlight.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    BreedComponent,
    SubBreedComponent,
    SearchFilterPipe,  // -> added filter pipe to use it inside the component
    HighlightDirective, 
    NotFoundComponent, 
	HomepageComponent, 
	PostComponent, 
  ],
  imports: [
    BrowserModule,
	FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    AccordionModule,
    ButtonModule,
    FormsModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }