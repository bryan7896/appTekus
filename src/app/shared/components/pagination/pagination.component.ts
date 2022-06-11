import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number = 1;
  @Output() selectedNumber = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log('currentPage', this.currentPage)
  }

  setSelectedNumber(num: number){
    this.selectedNumber.emit(num);
  }
}
