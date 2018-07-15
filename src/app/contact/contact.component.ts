import { User } from './../models/User';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

// declare the dollar sign character for access to jquery (as any type)
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // make blank user object
  user: User = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe();
  }


  onSubmit() {
    // make sure the textboxes have data
    if (this.user.name !== '' && this.user.email !== '' && this.user.message !== '') {
      this.userService.addUser(this.user);
      // make input blank
      this.user.name = '';
      this.user.email = '';
      this.user.message = '';
    }
  }

}
