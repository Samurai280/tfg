import { Component, OnInit, } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-rayos',
  templateUrl: './rayos.component.html',
  styleUrls: ['./rayos.component.css']
})
export class RayosComponent implements OnInit {
  

  constructor()  {}

  ngOnInit(): void {
    $(".tablas-part").hide();
  
  }
  VerTabla () {
    $(".tablas-part").toggle("slow");
  }
 
  
}


