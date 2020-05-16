import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../../../../environments/environment';

export interface ManufacturerOutput extends ManufacturerInput{
  id: string;
}

export interface ManufacturerInput {
  title: string;
  country: string;
}

@Injectable({ providedIn: 'root' })
export class ManufacturersService {

  constructor(private http: HttpClient) { }

  getAllManufacturers(): Observable<ManufacturerOutput[]> {
    return this.http.get<ManufacturerOutput[]>(`${API_URL}/api/manufacturers`);
  }

  createManufacturer(manufacturer: ManufacturerInput): Observable<ManufacturerOutput> {
    return this.http.post<ManufacturerOutput>(`${API_URL}/api/manufacturers`, manufacturer);
  }
}
