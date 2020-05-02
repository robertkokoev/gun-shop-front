import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjectRoutingModule } from './project-routing.module';
import { CommonModule } from '@angular/common';
import { NzButtonModule, NzIconModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [MainPageComponent],
  exports: [],
  imports: [ProjectRoutingModule, CommonModule, NzButtonModule, NzIconModule]
})
export class ProjectModule { }
