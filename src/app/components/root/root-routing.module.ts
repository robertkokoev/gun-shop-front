import { Injectable, NgModule } from '@angular/core';
import { Resolve, RouterModule, Routes } from '@angular/router';
import { WeaponCreateComponent } from './weapon-create/weapon-create.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ManufacturerCreateComponent } from './manufacturer-create/manufacturer-create.component';
import { ManufacturerOutput, ManufacturersService } from '../shared/services/manufacturers.service';
import { Observable } from 'rxjs';
import { Caliber, CalibersService } from '../shared/services/calibers.service';

@Injectable({ providedIn: 'root' })
export class AllManufacturersResolver implements Resolve<ManufacturerOutput[]>{

  constructor(private manufacturersService: ManufacturersService) { }

  resolve(): Observable<ManufacturerOutput[]> {
    return this.manufacturersService.getAllManufacturers();
  }

}

@Injectable({ providedIn: 'root' })
export class AllCalibersResolver implements Resolve<Caliber[]> {

  constructor(private calibersService: CalibersService) { }

  resolve(): Observable<Caliber[]> {
    return this.calibersService.getCalibers();
  }

}

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin-panel'
  },
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    data: { title: 'Админка' },
    resolve: {
      manufacturers: AllManufacturersResolver,
      calibers: AllCalibersResolver
    },
    children: [
      {
        path: '',
        redirectTo: 'weapon-create',
      },
      {
        path: 'weapon-create',
        component: WeaponCreateComponent
      },
      {
        path: 'manufacturer',
        component: ManufacturerCreateComponent
      }
    ]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class RootRoutingModule { }
