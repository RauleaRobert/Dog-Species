import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  readonly BREEDS_URL = 'https://dog.ceo/api'

  constructor(
    private httpClient: HttpClient
    ) { }


  public getBreeds(){
    return this.httpClient.get<any>(this.BREEDS_URL + '/breeds/list/all');
  }

  public getSubBreeds(name:string) {
    return this.httpClient.get<any>(this.BREEDS_URL + '/breed/' + name + '/list');
  }

  public getImage(name:string) {
    return this.httpClient.get<any>(this.BREEDS_URL + '/breed/' + name + '/images/random')
  }

  public getSource (breedName: string, subBreedName: string) {
    return this.httpClient.get<any>(this.BREEDS_URL + '/breed/' + breedName +'/'+ subBreedName +'/images/random'  )
  }

}
