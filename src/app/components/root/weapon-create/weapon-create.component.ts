import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeaponsService } from '../../shared/services/weapons.service';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { ActivatedRoute } from '@angular/router';
import { ManufacturerOutput } from '../../shared/services/manufacturers.service';
import { Caliber } from '../../shared/services/calibers.service';

@Component({
  selector: 'app-weapon-create',
  templateUrl: './weapon-create.component.html',
  styleUrls: ['./weapon-create.component.scss']
})
export class WeaponCreateComponent {

  private _filteredCalibers = Array<string>();
  private _manufacturers: ManufacturerOutput[] = this.route.snapshot.data.manufacturers;
  private _calibers: Caliber[] = this.route.snapshot.data.calibers;
  private _file = Array<UploadFile>();
  private _weaponForm = this.fb.group({
    price: this.fb.control(null, Validators.required),
    title: this.fb.control(null, Validators.required),
    manufacturerId: this.fb.control(null, Validators.required),
    type: this.fb.control(null, Validators.required),
    length: this.fb.control(null, Validators.required),
    weight: this.fb.control(null, Validators.required),
    capacity: this.fb.control(null),
    caliber: this.fb.control(null),
    bulletSpeed: this.fb.control(null),
    images: this.fb.control(null)
  });

  get weaponForm(): FormGroup {
    return this._weaponForm;
  }

  get calibers(): Caliber[] {
    return this._calibers;
  }

  get manufacturers(): ManufacturerOutput[] {
    return this._manufacturers;
  }

  get filteredCalibers(): string[] {
    return this._filteredCalibers;
  }

  set file(value: UploadFile[]) {
    this._file = value;
  }

  get file(): UploadFile[] {
    return this._file;
  }

  constructor(
    private fb: FormBuilder,
    private weaponsService: WeaponsService,
    private route: ActivatedRoute,
    private message: NzMessageService
  ) { }

  onChange(value: string): void {
    this._filteredCalibers = this.calibers
      .filter(option => option.title.toLowerCase().indexOf(value.toLowerCase()) !== -1)
      .map(item => item.title);
  }

  saveGun(): void {
    this.weaponForm.controls.images.setValue(this.file.map(file => file.thumbUrl).toString());

    this.weaponsService.createWeapon(this.weaponForm.value)
      .subscribe(() => this.message.success('Товар добавлен'));

    console.log(this.weaponForm.value);
  }

}
