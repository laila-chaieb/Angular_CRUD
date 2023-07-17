import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Classe } from '../models/classe.model';


@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  private getUrl: string = "http://localhost:8080/api/v1/test/classes";

  constructor(private http: HttpClient) {}
  getClasses(): Observable<Classe[]> {
    return this.http.get<Classe[]>(this.getUrl).pipe(
      map(response => response)
    )
  }


  saveClasse(classe: Classe): Observable<Classe> {
    return this.http.post<Classe>(this.getUrl, classe);
  }

  getClasse(id: number): Observable<Classe> {
    return this.http.get<Classe>(`${this.getUrl}/${id}`).pipe(
      map(response => response)
    )
  }

  deleteClasse(id: number): Observable<any> {
    return this.http.delete(`${this.getUrl}/${id}`, {responseType: 'text'});
  }
}
