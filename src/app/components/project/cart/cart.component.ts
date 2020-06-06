import { Component, OnInit } from '@angular/core';
import { WeaponOutput } from '../../shared/services/weapons.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  private _items = Array<WeaponOutput>();

  get items(): WeaponOutput[] {
    return this._items;
  }

  constructor() { }

  ngOnInit(): void {
    const str = localStorage.getItem('cartItems');
    this._items = JSON.parse(str);
  }

  minus(count: HTMLInputElement): void {
    if (+count.value < 1) {
      return;
    }

    count.value = (+count.value - 1).toString();
  }

  removeFromCart(id: number): void {
    const newItems = this.items.filter(i => i.id !== id);
    this._items = [...newItems];

    localStorage.setItem('cartItems', JSON.stringify(newItems));
  }

}
