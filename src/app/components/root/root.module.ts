import { NgModule } from '@angular/core';
import { RootRoutingModule } from './root-routing.module';
import { WeaponCreateComponent } from './weapon-create/weapon-create.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ManufacturerCreateComponent } from './manufacturer-create/manufacturer-create.component';

@NgModule({
  declarations: [WeaponCreateComponent, AdminPanelComponent, ManufacturerCreateComponent],
  exports: [WeaponCreateComponent],
  imports: [RootRoutingModule, NgZorroAntdModule, ReactiveFormsModule, CommonModule]
})
export class RootModule { }
