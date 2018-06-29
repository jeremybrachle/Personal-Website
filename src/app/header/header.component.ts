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

    /*
    // enable everything to be clicked when the navbar is not collapsed
    $('.navbar-collapse').on('show.bs.collapse', function () {
      $('.SpecialCase *').prop('disabled', true);
    });

    // disable everything when the navbar is collapsed
    // (prevents unwanted clicking when the user just
    // wants to exit the navbar)
    $('.navbar-collapse').on('hide.bs.collapse', function () {
      $('.SpecialCase *').prop('disabled', false);
    });
    */

    // EXPANDED NAV BAR
    // enable everything to be clicked when the navbar is not collapsed
    $('.navbar-collapse').on('show.bs.collapse', function () {
      $('.PageContent *').prop('disabled', true);
    });

    // COLLAPSED NAV BAR
    // disable everything when the navbar is collapsed
    // (prevents unwanted clicking when the user just
    // wants to exit the navbar)
    $('.navbar-collapse').on('hidden.bs.collapse', function () {
      $('.PageContent *').prop('disabled', false);
    });


  }

}
