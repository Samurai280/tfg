import { LOCATION_INITIALIZED } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css']
})
export class Question3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  recargar () {
    location.reload();
  }
}
