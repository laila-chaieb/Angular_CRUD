import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Compte } from '../models/compte.model';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private baseUrl: string = "http://localhost:8080/api/v1/test/comptes";

  constructor(private http: HttpClient) { }
  getComptes(): Observable<Compte[]> {
    return this.http.get<Compte[]>(this.baseUrl).pipe(
      map(response => response)
    );
  }

  create(data: any): Observable<Compte> {
    return this.http.post<Compte>(this.baseUrl, data).pipe(
      map(response => response)
    );
  }

  update(id: any, data: any): Observable<Compte> {
    return this.http.put<Compte>(`${this.baseUrl}/${id}`, data).pipe(
      map(response => response)
    );
  }

  delete(id: any): Observable<Compte> {
    return this.http.delete<Compte>(`${this.baseUrl}/${id}`).pipe(
      map(response => response)
    );
  }

  deleteAll(): Observable<Compte> {
    return this.http.delete<Compte>(this.baseUrl).pipe(
      map(response => response)
    );
  }

  getCompte(id: number): Observable<Compte> {
    return this.http.get<Compte>(`${this.baseUrl}/${id}`).pipe(
      map(response => response)
    )
  }
}