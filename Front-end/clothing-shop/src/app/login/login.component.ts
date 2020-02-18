import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { AppUser } from '../jsonClass';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpService: HttpService, private router: Router, private shopService: ShopService) { }

  password = '';
  username = '';
  hide = true;
  appUser: AppUser = { username: null, password: null, role: null};

  ngOnInit() {
    if (this.shopService.isLogged === true) {
      this.router.navigateByUrl('/account');
    }
    localStorage.setItem('username', null);
  }

  login() {
    this.appUser.username = this.username;
    this.appUser.password = this.password;
    this.httpService.login(this.appUser).subscribe((appUser: any) => {
      if (appUser !== null) {
          this.shopService.appUser = appUser;
          localStorage.setItem('username', this.shopService.appUser.username);
          this.shopService.isLogged = true;
          if (this.shopService.payment === true) {
            this.router.navigateByUrl('/payment');
          } else if (this.shopService.appUser.role === 'ROLE_CLIENT') {
            this.router.navigateByUrl('/account');
          } else {
            this.httpService.clearCart(this.shopService.cart).subscribe((cart: any) => {
              this.shopService.cart = cart;
              this.shopService.quantity = 0;
              this.router.navigateByUrl('/listOfClothes');
            });
          }
      } else {
        alert('Wrong username or password!');
      }
    });
  }

}
