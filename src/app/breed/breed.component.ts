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
  subBreedName: string[] = [];
  imagePath : string = '';
  
  constructor(
    private route: ActivatedRoute,
    private readonly apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.name = params['breedName'];
    })
    
    this.apiService.getSubBreeds(this.name).subscribe(
      data => {
        
        for(let subBreed in data.message){
          this.subBreedName.push(data.message[subBreed])
        }
      }
    )

    this.apiService.getImage(this.name).subscribe(
     img => {
      this.imagePath = img.message;
      } 
    )
  }
}
