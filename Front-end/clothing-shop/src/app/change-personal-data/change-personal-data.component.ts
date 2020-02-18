import { Component, OnInit } from '@angular/core';
import { Client } from '../jsonClass';
import { HttpService } from '../http.service';
import { ShopService } from '../shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-personal-data',
  templateUrl: './change-personal-data.component.html',
  styleUrls: ['./change-personal-data.component.css']
})
export class ChangePersonalDataComponent implements OnInit {

  constructor(private httpService: HttpService, public shopService: ShopService, public router: Router) {
  }

  client: Client = {name: null, surname: null, sex: null, address: null, appUser: null};

  ngOnInit() {
    this.httpService.getClothesByCart().subscribe((clothes: any) => {
      this.shopService.cart.clothes = clothes;
      this.shopService.quantity = this.shopService.cart.clothes.length;
      if (localStorage.getItem('username') !== 'null') {
        this.httpService.getAppUser(localStorage.getItem('username')).subscribe((appUser: any) => {
          this.shopService.appUser = appUser;
          this.shopService.isLogged = true;
          if (this.shopService.appUser.role === 'ROLE_CLIENT') {
            this.httpService.getClientByUsername(this.shopService.appUser.username).subscribe((data: any) => {
              this.client = data;
            });
          } else {
          }
        });
      }
    });
  }

  save() {
    this.httpService.updateClient(this.client).subscribe((data: any) => {
      this.router.navigateByUrl('/account');
    });
  }
}
