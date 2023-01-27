import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  readonly testAPIUrl = "http://localhost:5288";

  constructor(private http: HttpClient) { }

  getTestInscription(): Observable<any[]> {
    return this.http.get<any>(this.testAPIUrl + '/test');
  }
}
