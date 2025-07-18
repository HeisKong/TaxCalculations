import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-surcharge',
  templateUrl: './surcharge.component.html',
  styleUrls: ['./surcharge.component.css']
})
export class SurchargeComponent implements OnChanges {
  @Input() surCharge: string = '';
  @Output() surChargeForTotal = new EventEmitter<string>();
  
  ngOnChanges(changes: SimpleChanges){
    if(!this.surCharge || this.surCharge === ''){
      this.surCharge ='';
      this.surChargeForTotal.emit('');
    }else{
      this.surChargeForTotal.emit(this.surCharge);
      const amount = Number(this.surCharge.replace(/,/g, '')) || 0;
      const surChargeCalculation = amount * 0.1;
      this.surCharge = surChargeCalculation.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      this.surChargeForTotal.emit(surChargeCalculation.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    }
  }
}
