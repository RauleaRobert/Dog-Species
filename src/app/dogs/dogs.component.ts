import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Dog } from '../dog';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit{

  public breeds: Dog[] = [];
  public filteredDogs: Dog[] = [];
  
  public searchText: string = '';

  constructor(private readonly apiService: ApiService) { }

  ngOnInit(): void {
    this.prepareDogs();
  }

  private prepareDogs(){
    this.apiService.getBreeds().subscribe(
      (data)=>{
        this.breeds = this.getListOfDogs(data.message);
        this.filteredDogs = this.breeds;
        
      }
    )
  }

  private getListOfDogs(dogObject: any): Dog[]{
    const dogs : Dog[] = [];
    
    for(const key of Object.keys(dogObject)) {
      dogs.push(new Dog({
        breedName: key,
        subBreedNames: dogObject[key]
      }));
    }
    return dogs;
  }

  public filterDogs(event: any){
    const text = event.target.value;

    this.filteredDogs = this.breeds.filter(
      (dog: Dog) => dog.breedName?.includes(text)
    )
  }
}