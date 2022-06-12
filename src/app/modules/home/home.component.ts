import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getDaysBitcoin, setCurrentPage, setSelectedDate } from 'src/app/config/global.action';
import { GlobalState } from 'src/app/config/global.reducer';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dateTime: Date = new Date();
  constructor(private store: Store<GlobalState>, private globalService: GlobalService) { }

  currentPage$: Observable<any> = this.store.select(state => state.currentPage);
  currentPage: number = 1;

  typeOfCurrency$: Observable<any> = this.store.select(state => state.typeOfCurrency);
  typeOfCurrency: any = {name: 'USD', TRM: 1, symbol: '$'};

  currentBitcoins$: Observable<any> = this.store.select(state => state.currentBitcoins);
  currentBitcoins: Array<any> = [];

  daysBitcoin$: Observable<any> = this.store.select(state => state.daysBitcoin);
  daysBitcoinSubscription: Subscription = new Subscription;
  daysBitcoin: Array<any> = [];

  ngAfterViewInit() {
    this.store.dispatch(new getDaysBitcoin());
  }
  ngOnInit() {
    this.typeOfCurrency$.subscribe((typeOfCurrency) => {
      this.typeOfCurrency = typeOfCurrency
    })

    this.store.dispatch(new setCurrentPage({currentPage: 1}));
    this.currentBitcoins$.subscribe((currentBitcoins) => {
      this.currentBitcoins = currentBitcoins
    })
    this.daysBitcoinSubscription = this.daysBitcoin$.subscribe((daysBitcoin) => {
      this.daysBitcoin = daysBitcoin
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

  setSelectedDay(event: Object){
    //Save the information of the selected data in the state and in the storage
    this.globalService.setStorage('selectedDate', {selectedDate: event})
    this.store.dispatch(new setSelectedDate({selectedDate: event}));
  }
  selectedNumber(currentPage: number) {
    this.store.dispatch(new setCurrentPage({currentPage}));
    this.store.dispatch(new getDaysBitcoin());
  }

  ngOnDestroy() {
    this.daysBitcoinSubscription.unsubscribe();
  }


}
