import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeaponsService, WeaponWithManufacturer } from '../../shared/services/weapons.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

interface CheckboxItem {
  label: string ;
  value: number | string;
  checked?: boolean;
}

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  private _filterForm = this.fb.group({
    price: this.fb.group({
      minPrice: this.fb.control(0),
      maxPrice: this.fb.control(50000)
    }),
    types: this.fb.control([]),
    manufacturerIds: this.fb.control([])
  });
  private _types: CheckboxItem[] = [
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
  private _weapons$ = this.weaponsService.getWeaponsWithManufacturers();
  private _manufacturers = Array<CheckboxItem>();

  get filterForm(): FormGroup {
    return this._filterForm;
  }

  get types(): CheckboxItem[] {
    return this._types;
  }

  set types(value: CheckboxItem[]) {
    this._types = value;
  }

  get weapons$(): Observable<WeaponWithManufacturer[]> {
    return this._weapons$;
  }

  get manufacturers(): CheckboxItem[] {
    return this._manufacturers;
  }

  set manufacturers(value: CheckboxItem[]) {
    this._manufacturers = value;
  }

  constructor(
    private fb: FormBuilder,
    private weaponsService: WeaponsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this._manufacturers = data.manufacturers.map(item => ({ label: item.title, value: item.id }));
    });
  }

  toggleTypes(items: CheckboxItem[], controlName: 'types' | 'manufacturerIds'): void {
    const checkedItems = items.filter(item => item.checked).map(item => item.value);

    this.filterForm.controls[controlName].setValue(checkedItems);
    console.log(this.filterForm.controls[controlName].value);
  }

  filter(): void {
    this._weapons$ = this.weaponsService.getWeaponsWithManufacturers(this.filterForm.value);
    console.log(this.filterForm.value);
  }
}
