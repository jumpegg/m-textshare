import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Observable';
import { Folder } from '../vo/folder';

@Injectable()
export class FolderService{
	private header:Headers;

	constructor(private http:Http){
		let header = new Headers({'Content-Type':'application/json'});
	}
	
	folderInsert(input:Folder){
		return this.http.post('/api/user/folder_create', input, {headers:this.header})
			.map(res=>res.json());
	}
	folderList(){
		return this.http.get('/api/user/folder_list', {headers:this.header})
			.map(res=>res.json());
	}
	folderTreeList(){
		return this.http.get('/api/user/folder_treeList', {headers:this.header})
			.map(res=>res.json());
	}
	folderRemove(input:number){
		return this.http.get('/api/user/folder_remove', {headers:this.header})
			.map(res=>res.json());
	}
}
