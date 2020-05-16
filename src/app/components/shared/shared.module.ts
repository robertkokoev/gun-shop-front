import { NgModule } from '@angular/core';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CommonModule } from '@angular/common';
import { NzButtonModule, NzIconModule } from 'ng-zorro-antd';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [CardsListComponent, TitleComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule
  ],
  exports: [CardsListComponent, TitleComponent]
})
export class SharedModule { }
