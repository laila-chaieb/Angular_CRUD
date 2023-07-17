import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Compte } from '../models/compte.model';
const baseUrl = "http://localhost:8080/api/v1/test/classes";

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http: HttpClient) { }
  create(data: any): Observable<Compte> {
    return this.http.post(baseUrl, data).pipe(
      map(response => response)
    );
  }
  update(id: any, data: any): Observable<Compte> {
    return this.http.put(`${baseUrl}/${id}`, data).pipe(
      map(response => response)
    );;
  }

  delete(id: any): Observable<Compte> {
    return this.http.delete(`${baseUrl}/${id}`).pipe(
      map(response => response)
    );;
  }

  deleteAll(): Observable<Compte> {
    return this.http.delete(baseUrl).pipe(
      map(response => response)
    );;
  }
}