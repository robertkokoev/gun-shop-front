import { Component, Input, OnInit } from '@angular/core';
import { WeaponOutput } from '../services/weapons.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {

  @Input() items = Array<WeaponOutput>();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(item: WeaponOutput): void {
    let items = Array<WeaponOutput>();

    const itemsString = localStorage.getItem('cartItems');

    if (itemsString) {
      items = JSON.parse(itemsString) as WeaponOutput[];
    }

    items.push(item);

    const str = JSON.stringify(items);
    localStorage.setItem('cartItems', str);
  }
}
