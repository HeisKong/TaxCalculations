import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sale-amount',
  templateUrl: './sale-amount.component.html',
  styleUrls: ['./sale-amount.component.css']
})
export class SaleAmountComponent {
  @Output() saleAmountForTax = new EventEmitter<string>();
  @Output() baseSaleAmount = new EventEmitter<string>();

  saleAmount: string = '';
  taxAmount: string = '';
  amountBlur() {
    if (!this.saleAmount || this.saleAmount === '' || this.saleAmount === '0.00') {
      this.saleAmount = '';
      this.taxAmount = '';
      this.saleAmountForTax.emit('');
    } else {
      const amount = Number(this.saleAmount.replace(/,/g, '')) || 0;
      this.saleAmount = amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
  }
  calAmountToTax() {
    const amount = Number(this.saleAmount.replace(/,/g, '')) || 0;
    if (amount === 0 || !amount) {
      this.saleAmountForTax.emit('');
      this.taxAmount = '';
      return;
    }
    const tax = amount * 0.07
    this.taxAmount = tax.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    this.baseSaleAmount.emit(this.saleAmount);
    this.saleAmountForTax.emit(this.taxAmount);
  }
}
