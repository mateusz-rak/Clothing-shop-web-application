import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client, AppUser, Cloth, Cart, ClothWithAllSize } from './jsonClass';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { Router } from '@angular/router';


export class ShopService {

  cart: Cart = { cart_id: 1, clothes: []};
  appUser: AppUser = { username: null, password: null, role: null};
  isLogged = false;
  payment = false;
  quantity = 0;

  constructor(private httpService: HttpService, private router: Router)  {
  }

  logout() {
    this.appUser = null;
    this.isLogged = false;
    localStorage.setItem('username', null);
  }

  addToCart(name: string, size: string) {
    this.httpService.getCloth(name, size).subscribe((cloth: any) => {
      this.cart.clothes.push(cloth);
      this.httpService.updateCart(this.cart).subscribe(() => {
      this.quantity = this.cart.clothes.length;
      });
    });
  }

  removeFromCart(cloth: Cloth) {
    for (let index = 0; index < this.cart.clothes.length; index++) {
      if (this.cart.clothes[index].cloth_id === cloth.cloth_id) {
        this.cart.clothes.splice(index, 1);
        break;
      }
    }
    this.httpService.updateCart(this.cart).subscribe((data: any) => {
      this.quantity = this.cart.clothes.length;
      this.router.navigateByUrl('order');
    });
  }



}
