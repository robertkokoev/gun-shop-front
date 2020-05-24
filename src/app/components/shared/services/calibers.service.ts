import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../../../../environments/environment';

export type Caliber = { title: string };

@Injectable({ providedIn: 'root' })
export class CalibersService {

  constructor(private http: HttpClient) { }

  getCalibers(): Observable<Caliber[]> {
    return this.http.get<Caliber[]>(`${API_URL}/api/calibers`);
  }

}
