import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JSONService {

  url: string = "/assets/jsons/authors.json"

  constructor(private http: HttpClient) {
    console.log('service cree');
  }

  public getAuthors(): Observable<any> {
    return this.http.get(this.url);
  }
}
