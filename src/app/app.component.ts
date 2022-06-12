import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { getCurrentBitcoins, initialState, setCurrentBitcoins, setDaysBitcoin, setDetailsOfTheDay, setSelectedDate, setTypeOfCurrency } from './config/global.action';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private store: Store,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {
    this.store.dispatch(new initialState());
    this.store.dispatch(new getCurrentBitcoins());
    this.timeout()
    
    //Update state variables for data stored in storage
    this.getStorage('currentBitcoins').subscribe((res)=> res!=null?this.store.dispatch(new setCurrentBitcoins({currentBitcoins: res.currentBitcoins})):null)
    this.getStorage('daysBitcoin').subscribe((res)=> res!=null?this.store.dispatch(new setDaysBitcoin({daysBitcoin: res.daysBitcoin})):null)
    this.getStorage('detailsOfTheDay').subscribe((res)=> res!=null?this.store.dispatch(new setDetailsOfTheDay({detailsOfTheDay: res.detailsOfTheDay})):null)
    this.getStorage('selectedDate').subscribe((res)=> res!=null?this.store.dispatch(new setSelectedDate({selectedDate: res.selectedDate})):null)
    this.getStorage('typeOfCurrency').subscribe((res)=> res!=null?this.store.dispatch(new setTypeOfCurrency({typeOfCurrency: res.typeOfCurrency})):null)
  }

  //Method that returns the result stored in storage
  getStorage(storage: string) {
    return this.globalService.getStorage(storage).pipe(
      map(storage => storage)
    );
  }

  //Property to keep bringing every minute the update of the value of bitcoin
  timeout = () => {
    setTimeout(() => {
      this.store.dispatch(new getCurrentBitcoins());
      this.timeout();
    }, 60 * 1000);
  }

}
