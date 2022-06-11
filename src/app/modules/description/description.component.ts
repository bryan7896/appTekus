import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setCurrentPage } from 'src/app/config/global.action';
import { GlobalState } from 'src/app/config/global.reducer';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor(private router: Router, private store: Store<GlobalState>) { }
  dateTime: Date = new Date();

  listTable: Array<any> = [1, 2, 3];
  selectedDayUser: Object = { hola: 'hola' };

  currentPage$: Observable<any> = this.store.select(state => state.currentPage);
  currentPage: number = 1;
  currentBitcoins$: Observable<any> = this.store.select(state => state.currentBitcoins);
  currentBitcoins: Array<any> = [];


  ngOnInit() {
    this.currentBitcoins$.subscribe((currentBitcoins) => {
      this.currentBitcoins = currentBitcoins
    })
    this.currentPage$.subscribe((currentPage) => {
      console.log('currentPage',currentPage)
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
  }
}
