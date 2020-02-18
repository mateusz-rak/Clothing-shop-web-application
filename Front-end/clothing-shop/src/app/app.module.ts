import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ShopService } from './shop.service';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import { PaymentComponent } from './payment/payment.component';
import { ShoppingHistoryComponent } from './shopping-history/shopping-history.component';
import { ChangePersonalDataComponent } from './change-personal-data/change-personal-data.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PaymentComponent,
    ShoppingHistoryComponent,
    ChangePersonalDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatStepperModule,
    MatRadioModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, MatCardModule, MatMenuModule,
    MatToolbarModule, MatIconModule, MatBadgeModule, MatTooltipModule, MatTableModule, MatSortModule,
    MatSelectModule, MatGridListModule
  ],
  providers: [HttpService, ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
