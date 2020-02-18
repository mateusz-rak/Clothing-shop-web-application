import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ShopService } from '../shop.service';
import { Router } from '@angular/router';
import { Order } from '../jsonClass';

@Component({
  selector: 'app-shopping-history',
  templateUrl: './shopping-history.component.html',
  styleUrls: ['./shopping-history.component.css']
})
export class ShoppingHistoryComponent implements OnInit {

  constructor(public httpService: HttpService, public shopService: ShopService, private router: Router) { }

  orders: Order[];
  displayedColumns: string[] = ['date', 'payment.name', 'price'];

  ngOnInit() {
    this.httpService.getClothesByCart().subscribe((clothes: any) => {
      this.shopService.cart.clothes = clothes;
      this.shopService.quantity = this.shopService.cart.clothes.length;
      if (localStorage.getItem('username') !== 'null') {
        this.httpService.getAppUser(localStorage.getItem('username')).subscribe((appUser: any) => {
          this.shopService.appUser = appUser;
          this.shopService.isLogged = true;
          this.httpService.getOrders(this.shopService.appUser.username).subscribe((orders: any) => {
            this.orders = orders;
          });
        });
      }
    });
  }

  getTotalCost() {
    return this.orders.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

}
