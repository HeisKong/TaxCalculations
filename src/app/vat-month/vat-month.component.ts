import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vat-month',
  templateUrl: './vat-month.component.html',
  styleUrls: ['./vat-month.component.css']
})
export class VatMonthComponent implements OnChanges {
  @Input() yearSelect: string = '';
  @Output() monthSelect = new EventEmitter<string>();
  month: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  canUseMonth: string[] = [];
  selectMonth = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['yearSelect']) {
      this.updateCanUseMonth();
      this.monthSelect.emit(this.selectMonth);
    }
  }

  updateCanUseMonth() {
  const now = new Date();
  const nowMonth = now.getMonth();
  const currentYear = now.getFullYear().toString();

  this.canUseMonth = [];

  if (this.yearSelect === currentYear) {
    for (let i = 0; i <= nowMonth; i++) {
      this.canUseMonth.push(this.month[i]);
    }
  } else if (this.yearSelect) {
    this.canUseMonth = [...this.month];
  }
}
onMonthChange(){
  this.monthSelect.emit(this.selectMonth);
}


}