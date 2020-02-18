import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HttpService } from '../http.service';
import { ShopService } from '../shop.service';
import { Cloth } from '../jsonClass';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  mySubscription: any;

  constructor(public httpService: HttpService, public shopService: ShopService, private router: Router) {
    // tslint:disable-next-line:only-arrow-functions
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
   }

  displayedColumns: string[] = ['name', 'sex.name', 'size.name', 'category.name', 'color.name', 'price', 'image', 'actions'];

  ngOnInit() {
    this.httpService.getClothesByCart().subscribe((clothes: any) => {
      this.shopService.cart.clothes = clothes;
      this.shopService.quantity = this.shopService.cart.clothes.length;
      if (localStorage.getItem('username') !== 'null') {
        this.httpService.getAppUser(localStorage.getItem('username')).subscribe((appUser: any) => {
          this.shopService.appUser = appUser;
          this.shopService.isLogged = true;
        });
      }
    });
  }

  getTotalCost() {
    return this.shopService.cart.clothes.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

  removeFromCart(cloth: Cloth) {
    this.shopService.removeFromCart(cloth);
  }

  payment() {
    if (this.shopService.cart.clothes.length === 0 ) {
      alert('Cart is empty!');
    } else if (this.shopService.isLogged === false) {
      this.shopService.payment = true;
      this.router.navigateByUrl('/login');
      alert('Please, login');
    } else {
      this.router.navigateByUrl('/payment');
    }
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
}
