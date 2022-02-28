import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DogSpecies';

  constructor( private http: HttpClient) { }

  reciveName(name: string){
    console.log(name);
    
  }
}
