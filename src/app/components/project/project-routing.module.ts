import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from '../root/admin-panel/admin-panel.component';

const routes: Routes = [
  {
    path: 'admin-panel',
    component: AdminPanelComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ProjectRoutingModule { }
