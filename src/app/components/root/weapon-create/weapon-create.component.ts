import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { WeaponsService } from '../../shared/services/weapons.service';
import { UploadFile } from 'ng-zorro-antd';
import { ActivatedRoute } from '@angular/router';
import { ManufacturerOutput } from '../../shared/services/manufacturers.service';

@Component({
  selector: 'app-weapon-create',
  templateUrl: './weapon-create.component.html',
  styleUrls: ['./weapon-create.component.scss']
})
export class WeaponCreateComponent implements OnInit {

  filteredCalibers = Array<string>();
  manufacturers: ManufacturerOutput[] = this.route.snapshot.data.manufacturers;
  calibers = this.route.snapshot.data.calibers;

  weaponForm = this.fb.group({
    price: this.fb.control(null, Validators.required),
    title: this.fb.control(null, Validators.required),
    manufacturerId: this.fb.control(null, Validators.required),
    type: this.fb.control(null, Validators.required),
    length: this.fb.control(null, Validators.required),
    weight: this.fb.control(null, Validators.required),
    capacity: this.fb.control(null),
    caliber: this.fb.control(null),
    bulletSpeed: this.fb.control(null),
    // images: this.fb.control([])
  });

  fileList: UploadFile[] = [];

  constructor(
    private fb: FormBuilder,
    private weaponsService: WeaponsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.route.data.subscribe(data => this.manufacturers = data.manufacturers);
  }

  onChange(value: string): void {
    this.filteredCalibers = this.calibers.filter(option => option.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

  saveGun(): void {
    // this.weaponForm.controls.images.setValue(this.fileList.map(file => file.thumbUrl));

    this.weaponsService.createWeapon(this.weaponForm.value)
      .subscribe(data => console.log(data));

    // console.log(this.weaponForm.value);
  }

}
