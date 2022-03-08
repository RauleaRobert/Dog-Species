import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedComponent } from './breed/breed.component';
import { DogsComponent } from './dogs/dogs.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SubBreedComponent } from './sub-breed/sub-breed.component';

const routes: Routes = [
  { 
    path: '',
    component: DogsComponent
  },
  { 
    path: 'breed/:breedName',
    component: BreedComponent
  },
  {
    path: 'breed/:breedName/:subBreedNames',
    component: SubBreedComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
