import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

const routes: Routes = [
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    data: { title: 'Админка' }
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class RootRoutingModule { }
