import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { API_URL } from '../../../../environments/environment';
import { WeaponType } from '../pipes/label.pipe';
import { ManufacturerOutput, ManufacturersService } from './manufacturers.service';
import { map } from 'rxjs/operators';

export interface WeaponWithManufacturer {
  id: number;
  price: number;
  title: string;
  manufacturer: ManufacturerOutput;
  type: WeaponType;
  length: number;
  weight: number;
  capacity: number | null;
  caliber: string | null;
  bulletSpeed: number | null;
  images: string;
}

export interface WeaponOutput extends WeaponInput {
  id: number;
}

export interface WeaponInput {
  price: number;
  title: string;
  manufacturerId: number;
  type: WeaponType;
  length: number;
  weight: number;
  capacity: number | null;
  caliber: string | null;
  bulletSpeed: number | null;
  images: string;
}

export interface Filter {
  price: { minPrice: number, maxPrice: number };
  types: string[];
  manufacturerIds: number[];
}

@Injectable({ providedIn: 'root' })
export class WeaponsService {

  constructor(
    private http: HttpClient,
    private manufacturersService: ManufacturersService
  ) {
  }

  createWeapon(weapon: WeaponInput): Observable<WeaponOutput> {
    return this.http.post<WeaponOutput>(`${API_URL}/api/weapons`, weapon);
  }

  getAllWeapons(filter?: Filter): Observable<WeaponOutput[]> {
    let types = '';

    if (filter) {
      types = 'type=' + filter.types.join('-');
    }

    return this.http.get<WeaponOutput[]>(`${API_URL}/api/weapons?${types}`);
  }

  getWeaponsWithManufacturers(filter?: Filter): Observable<WeaponWithManufacturer[]> {
    return forkJoin({
      weapons: this.getAllWeapons(filter),
      manufacturers: this.manufacturersService.getAllManufacturers()
    }).pipe(
      map(data => {
        return data.weapons.map(weapon => {
          const manufacturer = data.manufacturers.find(m => m.id === weapon.manufacturerId);

          delete weapon.manufacturerId;

          return { ...weapon, manufacturer } as WeaponWithManufacturer;
        });
      })
    );
  }
}
