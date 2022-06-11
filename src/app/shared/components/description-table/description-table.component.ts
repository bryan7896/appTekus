import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-table',
  templateUrl: './description-table.component.html',
  styleUrls: ['./description-table.component.css']
})
export class DescriptionTableComponent implements OnInit {

  @Input() currentTable: Array<any> = [];
  @Input() selectedDay: Object = {};
  constructor() { }

  ngOnInit(): void {
    console.log('currentTable',this.currentTable)
    console.log('selectedDay',this.selectedDay)
  }

}
