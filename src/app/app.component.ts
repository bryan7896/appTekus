import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCurrentBitcoins, initialState } from './config/global.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private store: Store,
  ) { }

  ngAfterViewInit() {
    //inicializa el estado de redux
    this.store.dispatch(new initialState());
  }


  ngOnInit() {
    this.store.dispatch(new getCurrentBitcoins());
    this.timeout()
  }

  //Property to keep bringing every minute the update of the value of bitcoin
  timeout = () => {
    setTimeout(() => {
      this.store.dispatch(new getCurrentBitcoins());
      this.timeout();
    }, 60 * 1000);
  }

}
