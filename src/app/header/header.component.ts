import { Component, OnInit } from '@angular/core';

// declare the dollar sign character for access to jquery (as any type)
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
    $('.navbar-brand, ul > li > a').on('click', function() {
      $('.navbar-collapse').collapse('hide');
    });

    // collapse if clicked outside of the navbar
    $(document).click(function(e) {
      if (!$(e.target).is('panel-body')) {
          $('.navbar-collapse').collapse('hide');
      }
    });


  }

}
