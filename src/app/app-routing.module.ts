import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'root',
      },
      {
        path: 'root',
        loadChildren: () => import('./components/root/root.module').then(m => m.RootModule)
      },
      {
        path: 'project',
        loadChildren: () => import('./components/project/project.module').then(m => m.ProjectModule)
      }
    ]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
