
import { Component, OnInit} from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor() {}
  ngOnInit () {
    const hamburger_icon: any = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger');
    const nav_list: any = document.querySelector('#nav-bar .nav-bar .nav-list');

    hamburger_icon.addEventListener('click', () => {
      nav_list.classList.toggle('open');
      hamburger_icon.classList.toggle('active');
    });
    
    
    // Scroll arriba de la web.
    $(".subir").click(function(e: any) {
      e.preventDefault(); // Para evitar que el link haga su función fundamental.
      $('html, body').animate({
          scrollTop: 0

      }, 500);
    });
  }  

    
}