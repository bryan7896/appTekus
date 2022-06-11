import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalState } from 'src/app/config/global.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dateTime: Date = new Date();
  constructor(private store: Store<GlobalState>) { }

  currentBitcoins$: Observable<any> = this.store.select(state => state.currentBitcoins);
  currentBitcoins: Array<any> = [];

  ngOnInit() {
    this.currentBitcoins$.subscribe((currentBitcoins) => {
      this.currentBitcoins = currentBitcoins
    })
    this.timeout()
  }

  timeout = () => {
    setTimeout(() => {
      this.dateTime = new Date();
      this.timeout();
    }, 1000);
  }

}
