import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-filing-type',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.css']
})
export class FilingTypeComponent implements OnInit {
  @Output() filingTypeForPage = new EventEmitter<string>();
  filingType: string = "0";

  ngOnInit() {
    this.filingTypeForPage.emit(this.filingType);
  }

  onFilingChange() {
    this.filingTypeForPage.emit(this.filingType);
  }
}
