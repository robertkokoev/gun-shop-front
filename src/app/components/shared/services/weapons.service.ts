import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../../../../environments/environment';

export interface WeaponOutput extends WeaponInput {
  id: number;
}

export interface WeaponInput {
  price: number;
  title: string;
  manufacturerId: number;
  type: string;
  length: number;
  weight: number;
  capacity: number | null;
  caliber: string | null;
  bulletSpeed: number | null;
}

export interface Filter {
  price: { minPrice: number, maxPrice: number };
  types: string[];
  manufacturerIds: number[];
}

@Injectable({ providedIn: 'root' })
export class WeaponsService {

  constructor(private http: HttpClient) { }

  createWeapon(weapon: WeaponInput): Observable<any> {
    return this.http.post(`${API_URL}/api/weapons`, weapon);
  }

  getAllWeapons(filter?: Filter): Observable<WeaponOutput[]> {
    let types = '';
    if (filter) {
      types = 'type=' + filter.types.join('-');
    }

    return this.http.get<WeaponOutput[]>(`${API_URL}/api/weapons?${types}`);
  }
}
