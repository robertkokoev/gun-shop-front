import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { WeaponOutput, WeaponsService } from '../shared/services/weapons.service';
import { Observable } from 'rxjs';
import { CatalogComponent } from './catalog/catalog.component';

@Injectable({ providedIn: 'root' })
export class AllWeaponsResolver implements Resolve<WeaponOutput[]> {

  constructor(private weaponsService: WeaponsService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<WeaponOutput[]> {
    return this.weaponsService.getAllWeapons();
  }
}

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  {
    path: 'main',
    component: MainPageComponent,
    resolve: {
      weapons: AllWeaponsResolver
    }
  },
  {
    path: 'catalog',
    component: CatalogComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ProjectRoutingModule { }
