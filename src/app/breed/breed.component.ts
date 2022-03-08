import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.css']
})
export class BreedComponent implements OnInit {

  name: string = '';
  subBreedNames: string[] = [];
  imagePath : string = '';
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getBreedName();
    this.getSubBreedName();
    this.getImagePath();
  }

  getBreedName () {
    this.activatedRoute.params.subscribe(params => {
      this.name = params['breedName'];
    })
  }

  getSubBreedName () {
    this.apiService.getSubBreeds(this.name).subscribe(
      (data) => {
        for(let subBreed in data.message){
          this.subBreedNames.push(data.message[subBreed])
        }
      }
    )
  }

  getImagePath () {
    this.apiService.getImage(this.name).subscribe(
     (img) => {
        this.imagePath = img.message;
      } 
    )
  }
}
