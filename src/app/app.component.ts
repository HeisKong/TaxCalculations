export interface TaxData {
  filingType: string;
  month: string;
  year: string;
  saleAmount: number;
  taxAmount: number;
  surcharge: number;
  penalty: number;
  totalAmount: number;
  showModal: boolean;
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'your-app-title';
  year: string = '';
  month: string = '';
  filingType: string = '';
  saleAmount: string = '';
  baseSaleAmount: string = '';
  taxAmount: string = '';
  surCharge: string = '';
  penalty: string = '';
  total: string = '';
  showModal: boolean = false;

  cardShow = 0;

  TaxData!: TaxData;

  goNext() {
    if (this.validateCheck()) {
      this.TaxData = {
        filingType: this.filingType,
        month: this.month,
        year: this.year,
        saleAmount: (Number(this.baseSaleAmount.replace(/,/g, '')) || 0),
        taxAmount: Number(this.taxAmount.replace(/,/g, '')) || 0,
        surcharge: Number(this.surCharge.replace(/,/g, '')) || 0,
        penalty: Number(this.penalty.replace(/,/g, '')) || 0,
        totalAmount: Number(this.total.replace(/,/g, '')) || 0,
        showModal: false
      };
      this.cardShow = 1;
    } else {
      alert('Invalid Data');
    }
  }

  validateCheck() {
    if (this.filingType === '0') {
      if (this.year && this.saleAmount && this.taxAmount && this.month) {
        this.total = this.taxAmount;
        this.filingType = 'Ordinary Filing';
        return this.year && this.saleAmount && this.taxAmount && this.month && this.filingType && this.total ;
      }
    } else if (this.filingType === '1') {
      if (this.year && this.saleAmount && this.taxAmount && this.month && this.surCharge && this.penalty) {
        this.filingType = 'Additional Filing';
        return this.year && this.saleAmount && this.taxAmount && this.month && this.surCharge && this.penalty && this.filingType;
      }
    }
    return false;
  }

  goBack() {
    this.cardShow = 0;
    this.year = '';
    this.filingType = '';
    this.saleAmount = '';
    this.baseSaleAmount = '';
    this.taxAmount = '';
    this.surCharge = '';
    this.penalty = '';
    this.total = '';
    this.showModal = false;
  }
}



