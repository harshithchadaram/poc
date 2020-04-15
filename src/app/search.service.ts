import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {}

  search(term: string) {
    if (term === '') {
      return of([{
        data : 'data'
      }]);
    }

    return;
  }}
