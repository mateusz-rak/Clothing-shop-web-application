import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public shopService: ShopService) { }

  ifEmployer: boolean;

  ngOnInit() {
  }

  logout() {
    this.shopService.logout();
  }




}
