import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeaponWithManufacturer } from '../../shared/services/weapons.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  weapons = Array<WeaponWithManufacturer>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.weapons = data.weapons;
      console.log(this.weapons);
    });
  }

}
