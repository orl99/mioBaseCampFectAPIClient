import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SaveTodos } from 'src/app/models/saveTodos.model';
import { environment } from 'src/environments/environment';

const APIEndpoint = environment.PHPAPIEndpoint;
const BCProxy = 'https://divine-haze-d70d.mio-agency-proxy.workers.dev/?';
@Injectable({
  providedIn: 'root'
})
export class BasecampService {
  httpBCHeaders: HttpHeaders;

  constructor(private http$: HttpClient) {
    console.log('Singlaton headers');
    this.httpBCHeaders = new HttpHeaders({
      'User-Agent': 'FirebaseBasecampApiTest (https://mio-api-basecamp.firebaseapp.com/)',
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': 'Bearer BAhbB0kiAbB7ImNsaWVudF9pZCI6IjNhNjg1MjJhMzIwNzE5M2M3MDBlNTQyMmQ0OGUwYWM5MDI1YTQzZDEiLCJleHBpcmVzX2F0IjoiMjAyMC0wNS0xN1QwNDowNzowOFoiLCJ1c2VyX2lkcyI6WzQxOTk1MzQxXSwidmVyc2lvbiI6MSwiYXBpX2RlYWRib2x0IjoiYjlhMmIzMTI3OTM0ZGQwNjE0ZDBkMWNlMGJiYTA1YmEifQY6BkVUSXU6CVRpbWUNJBIewNLJgRwJOg1uYW5vX251bWkC+AE6DW5hbm9fZGVuaQY6DXN1Ym1pY3JvIgdQQDoJem9uZUkiCFVUQwY7AEY=--2f4dff00651c5554ce7943143b72fef53ab5108b'
    });
    // // Change them to the mio ones when this is ready or for production
    // this.httpBCHeaders.append('User-Agent', 'FirebaseBasecampApiTest (https://mio-api-basecamp.firebaseapp.com/)');
    // this.httpBCHeaders.append('Content-Type', 'application/json; charset=utf-8');
    // // TODO: Implement an observable and state having the last Bearer token
    // this.httpBCHeaders.append('Authorization', 'Bearer BAhbB0kiAbB7ImNsaWVudF9pZCI6IjNhNjg1MjJhMzIwNzE5M2M3MDBlNTQyMmQ0OGUwYWM5MDI1YTQzZDEiLCJleHBpcmVzX2F0IjoiMjAyMC0wNS0xN1QwNDowNzowOFoiLCJ1c2VyX2lkcyI6WzQxOTk1MzQxXSwidmVyc2lvbiI6MSwiYXBpX2RlYWRib2x0IjoiYjlhMmIzMTI3OTM0ZGQwNjE0ZDBkMWNlMGJiYTA1YmEifQY6BkVUSXU6CVRpbWUNJBIewNLJgRwJOg1uYW5vX251bWkC+AE6DW5hbm9fZGVuaQY6DXN1Ym1pY3JvIgdQQDoJem9uZUkiCFVUQwY7AEY=--2f4dff00651c5554ce7943143b72fef53ab5108b');

  }

  createAuthorizationHeader(headers: Headers) {

  }

  async getTodos() {
    console.log(this.httpBCHeaders);
    // Todo Change Project ID and Task ID
    const response =
    await this.http$.get(`${BCProxy}https://3.basecampapi.com/4507993/buckets/16967348/todosets/2640059704/todolists.json`, {
      headers: this.httpBCHeaders
    }).toPromise();
    return response;
  }

  async saveTodosGS(dto: SaveTodos[]) {
    const response = await this.http$.post(`${APIEndpoint}saveTodo`, {dto}).toPromise();
    return response;
  }
}
