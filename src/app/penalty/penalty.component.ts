import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-penalty',
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.css']
})
export class PenaltyComponent implements OnChanges {
  @Input() checkValue: string = '';
  @Output() checkValueForTotal = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges) {
    if(this.checkValue || this.checkValue !== ''){
      this.checkValueForTotal.emit(this.checkValue);
      const defalutValue = 200;
      this.checkValue = defalutValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      this.checkValueForTotal.emit(this.checkValue);
    }
  }
}
