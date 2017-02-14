import { Component } from '@angular/core';
import  {PostsService} from '../services/posts.service';

@Component({
  moduleId:module.id,
  selector: 'user',
  templateUrl:'user.component.html',
  providers:[PostsService]
})
export class userComponent  { 

	name:string;
	runs:number;
	Posts: Posts[];


constructor(private postService:PostsService){
	this.name = "";
	this.runs = 0;
	this.postService.getPost().subscribe(posts =>{
		this.Posts = posts;
	});
}


remove(i:number){


}

 }

 interface Posts{
 	id:number;
 	name:string;
 	runs:number;
 }
