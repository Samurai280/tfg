import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-experimento',
  templateUrl: './experimento.component.html',
  styleUrls: ['./experimento.component.css']
})
export class ExperimentoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#respuesta18").click(function(){
      $("#mostrar18").toggle('slow');
    });
    $("#respuesta19").click(function(){
      $("#mostrar19").toggle('slow');
    });
    $("#respuesta20").click(function(){
      $("#mostrar20").toggle('slow');
    });
  }

}
