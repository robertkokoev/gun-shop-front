import { Component, OnInit } from '@angular/core';
import { WeaponOutput } from '../../shared/services/weapons.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items = Array<WeaponOutput>();
  // count = 1;

  constructor() { }

  ngOnInit(): void {
    const str = localStorage.getItem('cartItems');
    this.items = JSON.parse(str);
  }

  minus(count: HTMLInputElement): void {
    if (+count.value < 1) {
      return;
    }

    count.value = (+count.value - 1).toString();
  }
}
