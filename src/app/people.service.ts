import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class PeopleService {

  constructor(private http: Http) { }

  get(page = 1) {
    let url = `https://swapi.co/api/people/?page=${page}`;
    return this.http.get(url).map(data => data.json());
  }

}
