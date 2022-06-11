import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  listTable: Array<any> = [1,2,3];
  selectedDayUser: Object = {hola: 'hola'};
  currentPage: number = 1;
  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  navigateHome(){
    this.router.navigate(['/', 'home']);
  }
  selectedNumber(event: number){
    console.log('-->',event)
  }
}
