import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {
  @Output() selectYear = new EventEmitter<string>();
  year: string[] = [];
  selectYearValue: string = '';

  ngOnInit() {
    const nowYear = new Date().getFullYear();
    for (let i = 2020; i <= nowYear; i++) {
      this.year.push(i.toString());
    }
    
    this.selectYearValue = nowYear.toString();
    this.selectYear.emit(this.selectYearValue);
  }

  onYearChange() {
    this.selectYear.emit(this.selectYearValue);
  }
}
