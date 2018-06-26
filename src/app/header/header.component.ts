import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
    // collapse the navbar when a link is clicked
    /*
    $('.navbar-nav>li>a').on('click', function() {
      (<any>$('.navbar-collapse')).collapse('hide');
    });
    */

    /*
    $('a').on('click', function() {
      $('collapse').collapse();
    });
    */
   $('a').on('click', function() {
    (<any>$('.navbar-collapse')).collapse('hide');
  });
  }

}
