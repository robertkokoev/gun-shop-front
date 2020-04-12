import { NgModule } from '@angular/core';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CardsListComponent],
  imports: [
    CommonModule
  ],
  exports: [CardsListComponent]
})
export class SharedModule { }
