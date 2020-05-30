import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { WeaponOutput, WeaponsService } from '../shared/services/weapons.service';
import { Observable } from 'rxjs';
import { CatalogComponent } from './catalog/catalog.component';
import { AllManufacturersResolver } from '../root/root-routing.module';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';

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
    },
    data: { title: 'Главная' }
  },
  {
    path: 'catalog',
    component: CatalogComponent,
    resolve: {
      manufacturers: AllManufacturersResolver
    },
    data: { title: 'Каталог' }
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ProjectRoutingModule { }
