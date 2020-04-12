import { NgModule } from '@angular/core';
import { RootRoutingModule } from './root-routing.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminPanelComponent],
  exports: [AdminPanelComponent],
  imports: [RootRoutingModule, NgZorroAntdModule, ReactiveFormsModule]
})
export class RootModule { }
