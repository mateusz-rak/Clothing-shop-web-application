import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ClothComponent } from './cloth/cloth.component';
import { OrderComponent } from './order/order.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountComponent } from './account/account.component';
import { ListOfClothesComponent } from './list-of-clothes/list-of-clothes.component';
import { AddClothComponent } from './add-cloth/add-cloth.component';
import { PaymentComponent } from './payment/payment.component';
import { ShoppingHistoryComponent } from './shopping-history/shopping-history.component';
import { ChangePersonalDataComponent } from './change-personal-data/change-personal-data.component';

const routes: Routes = [
  {path: '', component : LoginComponent},
  {path: 'login', component : LoginComponent},
  {path: 'registration', component : RegistrationComponent},
  {path: 'cloth/:sex/:category', component : ClothComponent},
  {path: 'order', component : OrderComponent},
  {path: 'account', component : AccountComponent},
  {path: 'addCloth', component : AddClothComponent},
  {path: 'listOfClothes', component : ListOfClothesComponent},
  {path: 'payment', component : PaymentComponent},
  {path: 'shoppingHistory', component : ShoppingHistoryComponent},
  {path: 'account/change', component : ChangePersonalDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [LoginComponent, RegistrationComponent, OrderComponent, ClothComponent,
   NavbarComponent, AccountComponent, ListOfClothesComponent, AddClothComponent, PaymentComponent, ShoppingHistoryComponent
  , ChangePersonalDataComponent];
