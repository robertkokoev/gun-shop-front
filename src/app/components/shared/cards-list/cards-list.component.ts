import { Component, Input, OnInit } from '@angular/core';
import { WeaponWithManufacturer } from '../services/weapons.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {

  @Input() items = Array<WeaponWithManufacturer>();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(item: WeaponWithManufacturer): void {
    let items = Array<WeaponWithManufacturer>();

    const itemsString = localStorage.getItem('cartItems');

    if (itemsString) {
      items = JSON.parse(itemsString) as WeaponWithManufacturer[];
    }

    items.push(item);

    const str = JSON.stringify(items);
    localStorage.setItem('cartItems', str);
  }
}
