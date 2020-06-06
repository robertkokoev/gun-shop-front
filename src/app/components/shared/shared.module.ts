import { NgModule } from '@angular/core';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CommonModule } from '@angular/common';
import { NzButtonModule, NzIconModule } from 'ng-zorro-antd';
import { TitleComponent } from './title/title.component';
import { LabelPipe } from './pipes/label.pipe';

@NgModule({
  declarations: [
    CardsListComponent,
    TitleComponent,
    LabelPipe
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule
  ],
  exports: [
    CardsListComponent,
    TitleComponent,
    LabelPipe
  ]
})
export class SharedModule { }
