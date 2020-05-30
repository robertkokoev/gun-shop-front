import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjectRoutingModule } from './project-routing.module';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NzButtonModule, NzIconModule } from 'ng-zorro-antd';
import { CatalogComponent } from './catalog/catalog.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [MainPageComponent, CatalogComponent, AboutComponent, CartComponent],
  exports: [],
  imports: [
    ProjectRoutingModule,
    CommonModule,
    NzButtonModule,
    NzIconModule,
    SharedModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule]
})
export class ProjectModule {
}
