import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubBreedsComponent } from './sub-breeds/sub-breeds.component';
import { BreedsComponent } from './breeds/breeds.component';
import { SubBreedsImgComponent } from './sub-breeds-img/sub-breeds-img.component';

const routes: Routes = [
  { 
    path: '',
    component: BreedsComponent
  },
  { 
    path: 'breed/:name',
    component: SubBreedsComponent
  },
  {
    path: 'breed/:name/:subBreed',
    component: SubBreedsImgComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
