import { Component, OnInit, ViewChild } from '@angular/core';
import { Cloth } from '../jsonClass';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HttpService } from '../http.service';
import { ShopService } from '../shop.service';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-of-clothes',
  templateUrl: './list-of-clothes.component.html',
  styleUrls: ['./list-of-clothes.component.css']
})
export class ListOfClothesComponent implements OnInit {
  mySubscription: any;

  constructor(private httpService: HttpService, public shopService: ShopService, private router: Router) {
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

  displayedColumns: string[] = ['cloth_id', 'name', 'sex.name', 'size.name', 'category.name', 'color.name', 'price', 'image', 'actions'];
  listOfClothes: Cloth[];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  getProperty = (obj, path) => (
    path.split('.').reduce((o, p) => o && o[p], obj)
  )

  ngOnInit() {
    this.httpService.getAllClothes().subscribe((clothes: any) => {
      this.listOfClothes = clothes;
      this.dataSource = new MatTableDataSource(this.listOfClothes);
      this.dataSource.sortingDataAccessor = (obj, property) => this.getProperty(obj, property);
      this.dataSource.sort = this.sort;
      this.httpService.getAppUser(localStorage.getItem('username')).subscribe((appUser: any) => {
        this.shopService.appUser = appUser;
        this.shopService.isLogged = true;
      });
    });
  }

  removeCloth(cloth: Cloth) {
    this.httpService.removeCloth(cloth.cloth_id).subscribe((data: any) => {
      this.router.navigateByUrl('/listOfClothes');
    });
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
}
