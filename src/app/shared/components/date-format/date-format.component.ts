import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setTypeOfCurrency } from 'src/app/config/global.action';
import { GlobalState } from 'src/app/config/global.reducer';

@Component({
  selector: 'app-date-format',
  templateUrl: './date-format.component.html',
  styleUrls: ['./date-format.component.css']
})
export class DateFormatComponent implements OnInit {

  constructor(private store: Store<GlobalState>,
    private formBuilder: FormBuilder,
    ) { }

  states = [
    {name: 'USD', TRM: 1, symbol: '$'},
    {name: 'EUR', TRM: 0.95, symbol: '€'},
    {name: 'COP', TRM: 3879.54, symbol: '$'},
  ];

  form = new FormGroup({
    state: new FormControl(),
  });

  typeOfCurrency$: Observable<any> = this.store.select(state => state.typeOfCurrency);

  ngOnInit() {
    this.typeOfCurrency$.subscribe((typeOfCurrency) => {
      this.form.setValue({
        state: this.states[this.states.findIndex(state => state.name == typeOfCurrency.name)]
      })
    })
  }

  whenSelectingTypeOfCurrency(){
    console.log('form',this.form.value.state)
    this.store.dispatch(new setTypeOfCurrency({typeOfCurrency: this.form.value.state}))
  }

}
