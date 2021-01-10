import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-concepto',
  templateUrl: './concepto.component.html',
  styleUrls: ['./concepto.component.css']
})
export class ConceptoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#respuesta0").click(function(){
      $("#mostrar0").toggle('slow');
    });
    $("#respuesta1").click(function(){
      $("#mostrar1").toggle('slow');
    });
    $("#respuesta2").click(function(){
      $("#mostrar2").toggle('slow');
    });
    $("#respuesta3").click(function(){
      $("#mostrar3").toggle('slow');
    });
    $("#respuesta4").click(function(){
      $("#mostrar4").toggle('slow');
    });
    $("#respuesta5").click(function(){
      $("#mostrar5").toggle('slow');
    });
    $("#respuesta6").click(function(){
      $("#mostrar6").toggle('slow');
    });
    $("#respuesta7").click(function(){
      $("#mostrar7").toggle('slow');
    });
    $("#respuesta8").click(function(){
      $("#mostrar8").toggle('slow');
    });
    $("#respuesta9").click(function(){
      $("#mostrar9").toggle('slow');
    });
    $("#respuesta10").click(function(){
      $("#mostrar10").toggle('slow');
    });
    $("#respuesta11").click(function(){
      $("#mostrar11").toggle('slow');
    });
    $("#respuesta12").click(function(){
      $("#mostrar12").toggle('slow');
    });
    $("#respuesta13").click(function(){
      $("#mostrar13").toggle('slow');
    });
    $("#respuesta14").click(function(){
      $("#mostrar14").toggle('slow');
    });
    $("#respuesta15").click(function(){
      $("#mostrar15").toggle('slow');
    });
    $("#respuesta16").click(function(){
      $("#mostrar16").toggle('slow');
    });
    $("#respuesta17").click(function(){
      $("#mostrar17").toggle('slow');
    });
  }
  
    
}
