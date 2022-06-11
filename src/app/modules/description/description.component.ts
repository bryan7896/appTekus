import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getDetailsOfTheDay, setCurrentPage } from 'src/app/config/global.action';
import { GlobalState } from 'src/app/config/global.reducer';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor(private router: Router, private store: Store<GlobalState>) { }
  dateTime: Date = new Date();

  currentPage$: Observable<any> = this.store.select(state => state.currentPage);
  currentPage: number = 1;

  detailsOfTheDay$: Observable<any> = this.store.select(state => state.detailsOfTheDay);
  detailsOfTheDay: Array<any> = [];

  currentBitcoins$: Observable<any> = this.store.select(state => state.currentBitcoins);
  currentBitcoins: Array<any> = [];

  selectedDate$: Observable<any> = this.store.select(state => state.selectedDate);
  selectedDate: Object = {};

  typeOfCurrency$: Observable<any> = this.store.select(state => state.typeOfCurrency);
  typeOfCurrency: any = {name: 'USD', TRM: 1, symbol: '$'};


  ngOnInit() {
    this.store.dispatch(new setCurrentPage({currentPage: 1}));
    this.store.dispatch(new getDetailsOfTheDay());
    this.currentBitcoins$.subscribe((currentBitcoins) => {
      this.currentBitcoins = currentBitcoins
    })
    this.typeOfCurrency$.subscribe((typeOfCurrency) => {
      this.typeOfCurrency = typeOfCurrency
    })
    this.selectedDate$.subscribe((selectedDate) => {
      this.selectedDate = selectedDate
    })
    this.detailsOfTheDay$.subscribe((detailsOfTheDay) => {
      this.detailsOfTheDay = detailsOfTheDay
    })
    this.currentPage$.subscribe((currentPage) => {
      this.currentPage = currentPage
    })
    this.timeout()
  }

  timeout = () => {
    setTimeout(() => {
      this.dateTime = new Date();
      this.timeout();
    }, 1000);
  }
  navigateHome() {
    this.router.navigate(['/', 'home']);
  }
  selectedNumber(currentPage: number) {
    this.store.dispatch(new setCurrentPage({currentPage}));
    this.store.dispatch(new getDetailsOfTheDay());
  }
}
