import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client, AppUser, Cloth, Cart, ClothWithAllSize, Order } from './jsonClass';
import { Observable } from 'rxjs';
import { ShopService } from './shop.service';


export class HttpService {

  url = 'http://localhost:8080';

  constructor(private http: HttpClient)  {}

  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(this.url + '/client/updateClient', client);
  }

  deleteClient(username: string): Observable<Client> {
    return this.http.delete<Client>(this.url + '/client/deleteClient?username=' + username);
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.url + '/client/addClient', client);
  }

  getCloth(name: string, size: string): Observable<Cloth> {
    return this.http.get<Cloth>(this.url + '/cloth/getCloth?name=' + name + '&size=' + size);
  }

  addCloth(cloth: Cloth): Observable<Cloth> {
    return this.http.post<Cloth>(this.url + '/cloth/addCloth', cloth);
  }

  addClothWithAllSize(clothWithAllSize: ClothWithAllSize): Observable<ClothWithAllSize> {
    return this.http.post<ClothWithAllSize>(this.url + '/clothSize/addClothSize', clothWithAllSize);
  }

  pay(username: string, order: Order): Observable<any> {
    return this.http.put<any>(this.url + '/client/pay?username=' + username, order);
  }

  checkUsername(appUser: AppUser): Observable<AppUser> {
    return this.http.post<AppUser>(this.url + '/appUser/checkUsername', appUser);
  }

  login(appUser: AppUser): Observable<AppUser> {
    return this.http.post<AppUser>(this.url + '/appUser/login', appUser);
  }

  getAppUser(username: string): Observable<AppUser> {
    return this.http.get<AppUser>(this.url + '/appUser/?username=' + username);
  }

  getOrders(username: string): Observable<Order[]> {
    return this.http.get<Order[]>(this.url + '/client/getOrdersByUsername/?username=' + username);
  }

  getClientByUsername(username: string): Observable<Client> {
    return this.http.get<Client>(this.url + '/client/getClientByUsername/?username=' + username);
  }

  getClothes(sex: string, category: string): Observable<Cloth[]> {
    return this.http.get<Cloth[]>(this.url + '/cloth/getClothes?sex=' + sex + '&category=' + category);
  }

  getClothesWithAllSize(sex: string, category: string): Observable<ClothWithAllSize[]> {
    return this.http.get<ClothWithAllSize[]>(this.url + '/clothSize/getClothesSize?sex=' + sex + '&category=' + category);
  }

  getClothesByCart(): Observable<Cloth[]> {
    return this.http.get<Cloth[]>(this.url + '/cart/getCloth');
  }

  updateCart(cart: Cart): Observable<Cart> {
    return this.http.put<Cart>(this.url + '/cart/updateCart', cart);
  }

  clearCart(cart: Cart): Observable<Cart> {
    return this.http.put<Cart>(this.url + '/cart/clearCart', cart);
  }

  getAllClothes(): Observable<Cloth[]> {
    return this.http.get<Cloth[]>(this.url + '/cloth/all');
  }

  removeCloth(id: number): Observable<Cloth> {
    return this.http.delete<Cloth>(this.url + '/cloth/deleteCloth?id=' + id);
  }

  getSex(): Observable<any> {
    return this.http.get<any>(this.url + '/sex/all');
  }

  getCategory(): Observable<any> {
    return this.http.get<any>(this.url + '/category/all');
  }

  getTypeOfPayment(): Observable<any> {
    return this.http.get<any>(this.url + '/payment/all');
  }

  getSize(): Observable<any> {
    return this.http.get<any>(this.url + '/size/all');
  }

  getColor(): Observable<any> {
    return this.http.get<any>(this.url + '/color/all');
  }


}
