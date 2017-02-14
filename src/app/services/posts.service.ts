import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import  'rxjs/add/operator/map';

@Injectable()
export class PostsService{
	constructor(private http:Http){
		console.log('PostsService Initialized');
	}
	getPost(){
		return this.http.get('http://localhost:7778/data')
		.map(res => res.json());
	}
}
