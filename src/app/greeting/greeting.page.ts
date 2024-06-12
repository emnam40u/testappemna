import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.page.html',
  styleUrls: ['./greeting.page.scss'],
})
export class GreetingPage implements OnInit {
  name: string = '';
  lstname: string = '';
  tel: string = '';
  adr: string = '';
  email: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name') ?? 'Guest';
    this.lstname = this.route.snapshot.paramMap.get('lstname') ?? 'Guest';
    this.tel = this.route.snapshot.paramMap.get('tel') ?? 'Guest';
    this.adr = this.route.snapshot.paramMap.get('adr') ?? 'Guest';
    this.email = this.route.snapshot.paramMap.get('email') ?? 'Guest';
  }
}
