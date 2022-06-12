import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Dog } from '../dog';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
	breedName:string = '';
	imagePath: string = '';

  constructor(
	private readonly apiService: ApiService
  ) { }

  ngOnInit(): void {
	this.apiService.getSource(this.breedName).subscribe(
		(data)=> {
		  this.imagePath = data.message;
		}
	  );
  }

  

  posts: any[] = [];

  addComment(name:string, comment: string){
	this.breedName = name;
	this.posts.push(
		{
			dog: name,
			comment: comment
		}
		);
		console.log(this.posts);
  }
}
