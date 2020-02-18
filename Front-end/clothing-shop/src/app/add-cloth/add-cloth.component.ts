import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ShopService } from '../shop.service';
import { HttpService } from '../http.service';
import { Sex, Category, Color, Size, Cloth, Size1, ClothWithAllSize } from '../jsonClass';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-cloth',
  templateUrl: './add-cloth.component.html',
  styleUrls: ['./add-cloth.component.css']
})
export class AddClothComponent implements OnInit {

  constructor(private shopService: ShopService, private httpService: HttpService, private router: Router) {}


  ifS: boolean;
  ifM: boolean;
  ifL: boolean;
  ifXL: boolean;
  sexes: Sex[];
  sizes: Size[];
  categorys: Category[];
  colors: Color[];
  cloth: Cloth = {name: null, color: null, sex: null, category: null, size: null, cloth_id: null, price: null, image: null};
  clothWithAllSize: ClothWithAllSize = {name: null, color: null, sex: null, category: null, sizes: [], price: null, image: null};

  ngOnInit() {
    this.httpService.getAppUser(localStorage.getItem('username')).subscribe((appUser: any) => {
      this.shopService.appUser = appUser;
      this.shopService.isLogged = true;
    });
    this.httpService.getSex().subscribe((sex: any) => {
      this.sexes = sex;
    });
    this.httpService.getSize().subscribe((size: any) => {
      this.sizes = size;
    });
    this.httpService.getCategory().subscribe((category: any) => {
      this.categorys = category;
    });
    this.httpService.getColor().subscribe((color: any) => {
      this.colors = color;
    });
  }

  onFileSelected(event) {
    const files = event.target.files;
    const file = files[0];

    if (files && file) {
        const reader = new FileReader();

        reader.onload = this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.cloth.image = btoa(binaryString);
   }

  addCloth() {
    if (this.ifS) {
      this.cloth.size = this.sizes[0];
      this.clothWithAllSize.sizes.push(this.sizes[0]);
      this.httpService.addCloth(this.cloth).subscribe((data: any) => {
      });
    }
    if (this.ifM) {
      this.cloth.size = this.sizes[1];
      this.clothWithAllSize.sizes.push(this.sizes[1]);
      this.httpService.addCloth(this.cloth).subscribe((data: any) => {
      });
    }
    if (this.ifL) {
      this.cloth.size = this.sizes[2];
      this.clothWithAllSize.sizes.push(this.sizes[2]);
      this.httpService.addCloth(this.cloth).subscribe((data: any) => {
      });
    }
    if (this.ifXL) {
      this.cloth.size = this.sizes[3];
      this.clothWithAllSize.sizes.push(this.sizes[3]);
      this.httpService.addCloth(this.cloth).subscribe((data: any) => {
      });
    }
    this.clothWithAllSize.name = this.cloth.name;
    this.clothWithAllSize.category = this.cloth.category;
    this.clothWithAllSize.color = this.cloth.color;
    this.clothWithAllSize.image = this.cloth.image;
    this.clothWithAllSize.price = this.cloth.price;
    this.clothWithAllSize.sex = this.cloth.sex;
    this.httpService.addClothWithAllSize(this.clothWithAllSize).subscribe((data: any) => {
      this.ifS = false;
      this.ifM = false;
      this.ifL = false;
      this.ifXL = false;
      this.clothWithAllSize.sizes = [];
      this.cloth = {name: null, color: null, sex: null, category: null, size: null, cloth_id: null, price: null, image: null};
      alert('Cloth added');
    });
  }
}
