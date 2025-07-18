import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tax-amount',
  templateUrl: './tax-amount.component.html',
  styleUrls: ['./tax-amount.component.css']
})
export class TaxAmountComponent implements OnChanges {
  @Input() baseSaleAmount: string = '';
  @Output() taxAmountForTotal = new EventEmitter<string>();

  taxAmount: string = '';
  originalTax: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['baseSaleAmount']) {
      if(this.baseSaleAmount === '0.00' || !this.baseSaleAmount || this.baseSaleAmount === ''){
        this.taxAmount = '';
        this.taxAmountForTotal.emit('');
      }else{
        this.taxAmount = this.baseSaleAmount;
        this.taxAmountForTotal.emit(this.taxAmount);
      }
    }
  }
  taxBlur() {
    if (!this.taxAmount || this.taxAmount === '') {
      this.taxAmount = '';
    } else {
      const amount = Number(this.taxAmount.replace(/,/g, '')) || 0;
      this.taxAmount = amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
  }
  taxValidate() {
    const amount = Number(this.taxAmount.replace(/,/g, '')) || 0;
    this.originalTax = Number(this.baseSaleAmount.replace(/,/g, '')) || 0;
    if(this.originalTax == amount){
    }else
    if (this.originalTax - amount > this.originalTax + 20 || this.originalTax - amount < this.originalTax - 20) {
      alert('Invalid Tax');
    }
  }


}
