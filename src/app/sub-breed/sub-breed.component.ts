import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sub-breed',
  templateUrl: './sub-breed.component.html',
  styleUrls: ['./sub-breed.component.css']
})
export class SubBreedComponent implements OnInit {
  breedName:string = '';
  subBreedName: string = '';
  imagePath: string = '';

  message:string = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly apiService: ApiService
    ) { }

  ngOnInit(): void {
		this.activatedRoute.params.subscribe(params => {
		this.breedName = params['breedName'];
		this.subBreedName = params['subBreedNames']
    });

    this.apiService.getSource(this.breedName,this.subBreedName).subscribe(
      (data)=> {
        this.imagePath = data.message;
      }
    );
  }
}
