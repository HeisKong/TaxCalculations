import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component'; 
import { FilingTypeComponent } from './filing-type/filing-type.component';
import { VatMonthComponent } from './vat-month/vat-month.component';
import { YearComponent } from './year/year.component';
import { TaxAmountComponent } from './tax-amount/tax-amount.component';
import { SaleAmountComponent } from './sale-amount/sale-amount.component';
import { SurchargeComponent } from './surcharge/surcharge.component';
import { PenaltyComponent } from './penalty/penalty.component';
import { TotalAmountComponent } from './total-amount/total-amount.component';

@NgModule({
  declarations: [
    AppComponent,
    FilingTypeComponent,
    VatMonthComponent,
    YearComponent,
    TaxAmountComponent,
    SaleAmountComponent,
    SurchargeComponent,
    PenaltyComponent,
    TotalAmountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
