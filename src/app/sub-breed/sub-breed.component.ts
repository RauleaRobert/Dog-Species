import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sub-breed',
  templateUrl: './sub-breed.component.html',
  styleUrls: ['./sub-breed.component.css']
})
export class SubBreedComponent implements OnInit {
  name:string = '';
  subBreedName: string = '';
  imagePath: string = '';

  constructor(
    private route: ActivatedRoute,
    private readonly apiService: ApiService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.name = params['breedName'];
      this.subBreedName = params['subBreedName']
    });

    this.apiService.getSource({name:this.name, subBreed: this.subBreedName}).subscribe(
      data => {
        this.imagePath = data.message;
      }
    );
  }

}
