import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ShopService } from '../shop.service';
import { Client } from '../jsonClass';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

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

  deleteAccount() {
    this.httpService.deleteClient(this.client.appUser.username).subscribe((data: any) => {
      this.shopService.logout();
      alert('Your account has been deleted');
      this.router.navigateByUrl('/login');
    });
  }

}
