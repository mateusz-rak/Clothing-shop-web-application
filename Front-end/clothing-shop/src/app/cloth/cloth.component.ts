import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { ShopService } from '../shop.service';
import { Cloth, Size, ClothWithAllSize } from '../jsonClass';
import {FileUploaderOptions, FileUploader} from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-cloth',
  templateUrl: './cloth.component.html',
  styleUrls: ['./cloth.component.css']
})
export class ClothComponent implements OnInit {


  constructor(private route: ActivatedRoute, public httpService: HttpService, public shopService: ShopService, private router: Router) {
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

  uploader: FileUploader;
  mySubscription: any;
  sex: string;
  category: string;
  clothes: ClothWithAllSize[];
  size: Size;
  same = false;


  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.sex = param.get('sex');
    });
    this.route.paramMap.subscribe(param => {
      this.category = param.get('category');
    });
    this.httpService.getClothesWithAllSize(this.sex, this.category).subscribe((data: any) => {
      this.clothes = data;
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
    });
  }

  addToCart(cloth: ClothWithAllSize) {
    if (this.size !== undefined) {
      // tslint:disable-next-line:prefer-for-of
      for (let index = 0; index < this.shopService.cart.clothes.length; index++) {
        // tslint:disable-next-line: curly
        if (this.shopService.cart.clothes[index].name === cloth.name && this.shopService.cart.clothes[index].size.name === this.size.name) {
          alert('This cloth is already in the cart');
          this.same = true;
        }
      }
      if (this.same === false) {
        this.shopService.addToCart(cloth.name, this.size.name);
        alert('Added to cart.');
      }
    } else {
      alert('Please, choose size.');
    }
  }



  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

}
