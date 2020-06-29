import { Component, Input } from '@angular/core';
import { WeaponWithManufacturer } from '../services/weapons.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent {

  @Input() items = Array<WeaponWithManufacturer>();

  constructor(private message: NzMessageService) { }

  addToCart(item: WeaponWithManufacturer): void {
    let items = Array<WeaponWithManufacturer>();

    const itemsString = localStorage.getItem('cartItems');

    if (itemsString) {
      items = JSON.parse(itemsString) as WeaponWithManufacturer[];
    }

    if (items.some(i => i.id === item.id)) {
      this.message.warning('Данный товар уже добавлен в корзину ранее');
      return;
    }

    items.push(item);

    const str = JSON.stringify(items);
    localStorage.setItem('cartItems', str);

    this.message.success('Товар добавлен в корзину');
  }
}
