import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalState } from 'src/app/config/global.reducer';

@Component({
  selector: 'app-home-table',
  templateUrl: './home-table.component.html',
  styleUrls: ['./home-table.component.css']
})
export class HomeTableComponent implements OnInit {

  @Input() daysBitcoin: Array<any> = [];
  @Output() setSelectedDay = new EventEmitter<any>();

  constructor(private router: Router, private store: Store<GlobalState>) { }

  typeOfCurrency$: Observable<any> = this.store.select(state => state.typeOfCurrency);
  typeOfCurrency: any = { name: 'USD', TRM: 1, symbol: '$' };
  ngOnInit() {
    this.typeOfCurrency$.subscribe((typeOfCurrency) => {
      this.typeOfCurrency = typeOfCurrency
    })
  }

  navigateDescription() {
    this.router.navigate(['/', 'description']);
  }

  selectedDay(priceDay: Object) {
    this.setSelectedDay.emit(priceDay);
    this.navigateDescription()
  }

}
