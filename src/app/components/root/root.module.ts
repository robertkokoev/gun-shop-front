import { NgModule } from '@angular/core';
import { RootRoutingModule } from './root-routing.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AdminPanelComponent],
  exports: [AdminPanelComponent],
  imports: [RootRoutingModule, NgZorroAntdModule, ReactiveFormsModule, CommonModule]
})
export class RootModule { }
