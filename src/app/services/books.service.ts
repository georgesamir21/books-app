import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BooksService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getBookList() {

    // make api call to get the book list
    const url = 'http://94.130.110.214:8090/api/list';
    const body = {
      location: 'Hamburg'
    };

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post(
      url,
      body,
      { headers }
    );

  }
}
