import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ShopService } from '../shop.service';
import { Router } from '@angular/router';
import { Order, Payment } from '../jsonClass';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public httpService: HttpService, public shopService: ShopService, private router: Router) { }

  order: Order = {date: null, price: null, clothes: [], typeOfPayment: null};
  typesOfPayment: Payment[];

  ngOnInit() {
    this.httpService.getClothesByCart().subscribe((clothes: any) => {
      this.shopService.cart.clothes = clothes;
      this.shopService.quantity = this.shopService.cart.clothes.length;
      this.order.clothes = this.shopService.cart.clothes;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.order.clothes.length; i++) {
        this.order.price += this.order.clothes[i].price;
      }
      if (localStorage.getItem('username') !== 'null') {
        this.httpService.getAppUser(localStorage.getItem('username')).subscribe((appUser: any) => {
          this.shopService.appUser = appUser;
          this.shopService.isLogged = true;
        });
      }
    });
    this.httpService.getTypeOfPayment().subscribe((data: any) => {
      this.typesOfPayment = data;
    });
  }

  payment() {
    if (this.order.typeOfPayment === null) {
      alert('Please select a payment method');
    } else {
      this.order.date = new Date();
      this.shopService.payment = false;
      this.httpService.pay(this.shopService.appUser.username, this.order).subscribe((data: any) => {
      this.httpService.clearCart(this.shopService.cart).subscribe((cart: any) => {
        this.shopService.cart = cart;
        this.shopService.quantity = 0;
        alert('Payment has been made.');
        this.router.navigateByUrl('/shoppingHistory');
      });
    });
    }
  }

}
