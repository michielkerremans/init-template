import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getData(): Observable<Post> {
    // Example public API
    return this.http.get<Post>(`${environment.apiUrl}/posts/1`);
  }

  postData(data: Record<string, unknown>): Observable<Post> {
    // Example public API
    return this.http.post<Post>(`${environment.apiUrl}/posts`, data);
  }
}