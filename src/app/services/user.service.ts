import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from '../models/User';
// import { Observable } from 'rxjs/Observable';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

userCollection: AngularFirestoreCollection<User>;
users: Observable<User[]>;


constructor(public afs: AngularFirestore) {

  this.userCollection = this.afs.collection('users');

  this.users = this.afs.collection('users').valueChanges();
 }

getUsers() {
  return this.users;
}

// add users to database
addUser(user: User) {
  this.userCollection.add(user);
}


}


