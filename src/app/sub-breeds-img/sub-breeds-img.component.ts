import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sub-breeds-img',
  templateUrl: './sub-breeds-img.component.html',
  styleUrls: ['./sub-breeds-img.component.css']
})
export class SubBreedsImgComponent implements OnInit {
  name:string = '';
  subBreed: string = '';
  imageSource: string = '';

  constructor(
    private route: ActivatedRoute,
    private readonly apiService: ApiService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.name = params['name'];
      this.subBreed = params['subBreed']
    });

    this.apiService.getSource({name:this.name, subBreed: this.subBreed}).subscribe(
      data => {
        this.imageSource = data.message;
      }
    );
  }

}
