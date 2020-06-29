import { Component, OnInit } from '@angular/core';
import { WeaponOutput } from '../../shared/services/weapons.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  private _items = Array<WeaponOutput>();
  private _totalPrice = 0;

  get items(): WeaponOutput[] {
    return this._items;
  }

  get totalPrice(): number {
    return this._totalPrice;
  }

  set totalPrice(value: number) {
    this._totalPrice = value;
  }

  constructor() { }

  ngOnInit(): void {
    const str = localStorage.getItem('cartItems');
    this._items = JSON.parse(str);

    const prices = this.items.map(i => i.price);
    this.totalPrice = prices.reduce((previous, current) => {
      return previous + current;
    }, 0);
  }

  minus(count: HTMLInputElement, price: number): void {
    if (+count.value < 1) {
      return;
    }

    this.totalPrice -= price;

    count.value = (+count.value - 1).toString();
  }

  plus(count: HTMLInputElement, price: number): void {
    this.totalPrice += price;

    count.value = (+count.value + 1).toString();
  }

  removeFromCart(id: number, count: number, price: number): void {
    const newItems = this.items.filter(i => i.id !== id);
    this._items = [...newItems];

    this.totalPrice -= count * price;

    localStorage.setItem('cartItems', JSON.stringify(newItems));
  }

}
