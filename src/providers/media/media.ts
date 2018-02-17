import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {
  test = 'Head line';
  apiUrl = 'http://media.mw.metropolia.fi/wbma';
  mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';
  apiUrl_user = 'http://media.mw.metropolia.fi/wbma/users/';
  apiUrl_media = 'http://media.mw.metropolia.fi/wbma/media';

  constructor(private http: HttpClient) {
   }

  getUserData(userId){
    const settings = {
      headers: new HttpHeaders().set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo3NSwidXNlcm5hbWUiOiJoaWV1IiwiZW1haWwiOiJoaWV1dkBtZXRyb3BvbGlhLmZpIiwiZnVsbF9uYW1lIjpudWxsLCJpc19hZG1pbiI6bnVsbCwidGltZV9jcmVhdGVkIjoiMjAxOC0wMS0yOVQxMzoyNjoxNy4wMDBaIiwiaWF0IjoxNTE3MjMyNzA3LCJleHAiOjE1MTkzMDYzMDd9.NcmC4fifKpBYkDn4h-W81NnocBO9TrTIltHnNlQ-SQ8'),
    };
    console.log(settings);
    console.log(this.http.get(this.apiUrl_user + userId, settings));
    return this.http.get(this.apiUrl_user + userId, settings);
  }

  public uploadFile(media){
    const settings = {
      headers: new HttpHeaders().set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo3NSwidXNlcm5hbWUiOiJoaWV1IiwiZW1haWwiOiJoaWV1dkBtZXRyb3BvbGlhLmZpIiwiZnVsbF9uYW1lIjpudWxsLCJpc19hZG1pbiI6bnVsbCwidGltZV9jcmVhdGVkIjoiMjAxOC0wMS0yOVQxMzoyNjoxNy4wMDBaIiwiaWF0IjoxNTE3MjMyNzA3LCJleHAiOjE1MTkzMDYzMDd9.NcmC4fifKpBYkDn4h-W81NnocBO9TrTIltHnNlQ-SQ8'),
    };
    console.log(settings);
    console.log(this.http.post(this.apiUrl_media, media, settings));
    return this.http.post(this.apiUrl_media, media, settings);
  }

  getAllMedia(){
    return this.http.get(this.apiUrl + '/media');
  }
  getMediaById(id){
    console.log(this.http.get(this.apiUrl + '/media/'+id));
    return this.http.get(this.apiUrl + '/media/'+id);
  }
  getComment(id){
    console.log(this.http.get(this.apiUrl + '/comments/file/'+id));
    return this.http.get(this.apiUrl + '/comments/file/'+id);
  }
  
  getLike(id){
    console.log(this.http.get(this.apiUrl + '/favourites/file/'+id));
    return this.http.get(this.apiUrl + '/favourites/file/'+id);
  }
}
