import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalState } from 'src/app/config/global.reducer';

@Component({
  selector: 'app-description-table',
  templateUrl: './description-table.component.html',
  styleUrls: ['./description-table.component.css']
})
export class DescriptionTableComponent implements OnInit {
  constructor(private store: Store<GlobalState>) { }

  @Input() currentTable: Array<any> = [];
  @Input() selectedDay: any = {};

  createdAt: Date = new Date();
  typeOfCurrency$: Observable<any> = this.store.select(state => state.typeOfCurrency);
  typeOfCurrency: any = { name: 'USD', TRM: 1, symbol: '$' };

  ngOnInit() {
    this.typeOfCurrency$.subscribe((typeOfCurrency) => {
      this.typeOfCurrency = typeOfCurrency
    })
    this.createdAt = this.selectedDay.createdAt ?? new Date();
  }

}
