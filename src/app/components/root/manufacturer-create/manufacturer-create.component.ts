import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ManufacturersService } from '../../shared/services/manufacturers.service';

@Component({
  selector: 'app-manufacturer-create',
  templateUrl: './manufacturer-create.component.html',
  styleUrls: ['./manufacturer-create.component.scss']
})
export class ManufacturerCreateComponent implements OnInit {

  private _form = this.fb.group({
    title: this.fb.control(null, Validators.required),
    country: this.fb.control(null, Validators.required)
  });

  get form(): FormGroup {
    return this._form;
  }

  constructor(private fb: FormBuilder, private manufacturersService: ManufacturersService) { }

  ngOnInit(): void {
  }

  createManufacturer(): void {
    if (this.form.invalid) {
      return;
    }

    this.manufacturersService.createManufacturer(this.form.value).subscribe();
  }
}
