import { NgModule } from '@angular/core';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CommonModule } from '@angular/common';
import { NzButtonModule, NzIconModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [CardsListComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule
  ],
  exports: [CardsListComponent]
})
export class SharedModule { }
