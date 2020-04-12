import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  weaponForm = this.fb.group({
    title: this.fb.control(null, Validators.required),
    caliber: this.fb.control(null, Validators.required),
    country: this.fb.control(null, Validators.required),
    company: this.fb.control(null, Validators.required),
    gunType: this.fb.control(null, Validators.required),
    length: this.fb.control(null, Validators.required),
    width: this.fb.control(null, Validators.required),
    height: this.fb.control(null, Validators.required),
    bulletSpeed: this.fb.control(null, Validators.required),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
