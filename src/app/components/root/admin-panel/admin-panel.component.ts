import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { WeaponsService } from '../../shared/services/weapons.service';
import { UploadFile } from 'ng-zorro-antd';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  // calibers = Array<string>();
  calibers = ['5.56мм', '7.62мм', '9мм'];
  filteredCalibers = Array<string>();

  weaponForm = this.fb.group({
    title: this.fb.control(null, Validators.required),
    country: this.fb.control(null, Validators.required),
    manufacturer: this.fb.control(null, Validators.required),
    weaponType: this.fb.control(null, Validators.required),
    length: this.fb.control(null, Validators.required),
    weight: this.fb.control(null, Validators.required),
    capacity: this.fb.control(null),
    caliber: this.fb.control(null),
    bulletSpeed: this.fb.control(null),
    images: this.fb.control([]),
  });

  fileList: UploadFile[] = [];

  constructor(private fb: FormBuilder, private weaponsService: WeaponsService) {
  }

  ngOnInit(): void {
  }

  onChange(value: string): void {
    this.filteredCalibers = this.calibers.filter(option => option.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

  saveGun(): void {
    this.weaponForm.controls.images.setValue(this.fileList.map(file => file.thumbUrl));

    // this.weaponsService.createWeapon(this.weaponForm.value)
    //   .subscribe(data => console.log(data));

    console.log(this.weaponForm.controls.images.value);
  }

}
