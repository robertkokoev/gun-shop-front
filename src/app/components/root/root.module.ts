import { NgModule } from '@angular/core';
import { RootRoutingModule } from './root-routing.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

@NgModule({
  declarations: [AdminPanelComponent],
  exports: [AdminPanelComponent],
  imports: [RootRoutingModule]
})
export class RootModule { }
