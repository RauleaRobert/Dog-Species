import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sub-breeds',
  templateUrl: './sub-breeds.component.html',
  styleUrls: ['./sub-breeds.component.css']
})
export class SubBreedsComponent implements OnInit {

  name: string = '';
  subBreeds: string[] = [];
  images : string = '';
  
  constructor(
    private route: ActivatedRoute,
    private readonly apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.name = params['name'];
    })
    // console.log(this.name);
    
    this.apiService.getSubBreeds(this.name).subscribe(
      data => {
        console.log(data);
        
        for(let subBreed in data.message){
          this.subBreeds.push(data.message[subBreed])
        }

        console.log(this.subBreeds);
        
      }
    )

    this.apiService.getImage(this.name).subscribe(
     img => {
      this.images = img.message;
      } 
    )
  }
}
