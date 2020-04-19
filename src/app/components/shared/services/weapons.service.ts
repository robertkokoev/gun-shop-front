import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WeaponInput {
  title: string;
  country: string;
  manufacturer: string;
  type: string;
  length: number;
  weight: number;
  capacity: number | null;
  caliber: string | null;
  bulletSpeed: number | null;
}

@Injectable({ providedIn: 'root' })
export class WeaponsService {

  constructor(private http: HttpClient) { }

  createWeapon(weapon: WeaponInput): Observable<any> {
    return this.http.post('https://localhost:44358/api/weapons', weapon);
  }
}
