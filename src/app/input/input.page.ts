import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage {
  name: string = '';
  lstname: string = '';
  tel: string = '';
  adr: string = '';
  email: string = '';

  constructor(private router: Router) {}

  submitForm() {
    this.router.navigate(['/greeting', this.name, this.lstname, this.tel, this.adr, this.email]);
  }
}
