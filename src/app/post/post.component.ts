import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
	@Input() user: any;

	imagePath: string = '';
	likes: number = 0;
	comments: number = 0;

	constructor(
		private readonly apiService: ApiService
	) { }

  ngOnInit(): void {
	this.apiService.getImage(this.user.dog).subscribe(
		(img) => {
			this.imagePath = img.message;
		} 
	)	
  }

  likeBtn() {
	this.likes++
  }

  commentBtn() {
	this.comments++
  }
}
