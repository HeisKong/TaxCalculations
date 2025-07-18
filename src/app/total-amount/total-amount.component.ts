import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-total-amount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.css']
})
export class TotalAmountComponent implements OnChanges {
  @Input() taxAmount: string = '';
  @Input() surCharge: string = '';
  @Input() penalty: string = '';
  @Output() TotalForCheck = new EventEmitter<string>();
  total: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    const taxAmount = Number(this.taxAmount.replace(/,/g, '')) || 0;
    const surCharge = Number(this.surCharge.replace(/,/g, '')) || 0;
    const penalty = Number(this.penalty.replace(/,/g, '')) || 0;
    if (taxAmount == 0 || surCharge == 0 || penalty == 0) {
      this.total = '';
    } else {
      const totalCal = taxAmount + surCharge + penalty;
      // console.log(taxAmount);
      // console.log(surCharge);
      // console.log(penalty);
      // console.log(totalCal);
      this.total = totalCal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    this.onTotalChange();
  }
  onTotalChange(){
    this.TotalForCheck.emit(this.total);
  }
}
