import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-table',
  templateUrl: './home-table.component.html',
  styleUrls: ['./home-table.component.css']
})
export class HomeTableComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  navigateDescription(){
    this.router.navigate(['/', 'description']);
  }

}
