import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-Dogs',
  templateUrl: './Dogs.component.html',
  styleUrls: ['./Dogs.component.css']
})
export class DogsComponent implements OnInit {

  breeds: string[] = [];

  constructor(private readonly apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getBreeds().subscribe(
      data => {
        for(let breed in data.message){
          this.breeds.push(breed)
        }
        console.log(this.breeds);
        
      }
    )
  }


  
}
