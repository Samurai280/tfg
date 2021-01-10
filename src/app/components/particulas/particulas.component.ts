import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-particulas',
  templateUrl: './particulas.component.html',
  styleUrls: ['./particulas.component.css']
})
export class ParticulasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  $(".u-d").hide();
  $(".s").hide();
  $(".c").hide();
  $(".b").hide();
  $(".t").hide();
  $(".all").hide();
  }
  VerTabla () {
    $(".u-d").toggle("slow");
    
  }
  VerTablaS() {
    $(".s").toggle("slow");
  }
  VerTablaC() {
    $(".c").toggle("slow");
  }
  VerTablaB() {
    $(".b").toggle("slow");
  }
  VerTablaT() {
    $(".t").toggle("slow");
  }
  VerTablaAll() {
    $(".all").toggle("slow");
  }
}
