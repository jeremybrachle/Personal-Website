import { User } from './../models/User';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


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

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    // this.userService.getUsers().subscribe();
  }

  showSuccess() {
    this.toastr.success('', 'Thank you for contacting me!', {tapToDismiss: true, closeButton: true});
  }

  onSubmit() {
    this.userService.addUser(this.user);
    console.log('submitted!');
    /*
    // make sure the textboxes have data
    if (this.user.name !== '' && this.user.email !== '' && this.user.message !== '') {
      this.userService.addUser(this.user);
      // make input blank
      this.user.name = '';
      this.user.email = '';
      this.user.message = '';
      console.log('record added');
    } else {
      console.log('record not added');
    }
    */
  }




}
