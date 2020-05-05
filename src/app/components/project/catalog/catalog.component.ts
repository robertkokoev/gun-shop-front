import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeaponOutput, WeaponsService } from '../../shared/services/weapons.service';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  private _filterForm = this.fb.group({
    price: this.fb.group({
      minPrice: this.fb.control(0),
      maxPrice: this.fb.control(100000)
    }),
    types: this.fb.control([])
  });
  private _types = [
    { value: 'pistol', label: 'Пистолет' },
    { value: 'submachine-gun', label: 'Пистолет-пулемёт' },
    { value: 'shotgun', label: 'Дробовик' },
    { value: 'automatic-rifle', label: 'Автоматическая винтовка' },
    { value: 'sniper-rifle', label: 'Снайперская винтовка' },
    { value: 'machine-gun', label: 'Пулемет' },
    { value: 'knife', label: 'Нож' },
    { value: 'sword', label: 'Меч' },
    { value: 'axe', label: 'Топор' },
  ];
  private _weapons$ = this.weaponsService.getAllWeapons().pipe(delay(5000));

  get filterForm(): FormGroup {
    return this._filterForm;
  }

  set filterForm(value: FormGroup) {
    this._filterForm = value;
  }

  get types(): { label: string; value: string }[] {
    return this._types;
  }

  set types(value: { label: string; value: string }[]) {
    this._types = value;
  }

  get weapons$(): Observable<WeaponOutput[]> {
    return this._weapons$;
  }

  constructor(private spinner: NgxSpinnerService, private fb: FormBuilder, private weaponsService: WeaponsService) { }

  ngOnInit(): void {
    this.spinner.show();
  }

  toggleTypes(checked: { label: string; value: string; checked?: boolean }[]): void {
    this.filterForm.controls.types.setValue(checked.filter(item => item.checked).map(item => item.value));
    console.log(this.filterForm.controls.types.value);
  }

}
