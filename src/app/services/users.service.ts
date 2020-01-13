import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public database:AngularFireDatabase) { }
  getUserApi(username: string) {
    return this.database.list('/users/'+username).snapshotChanges();
  }

}
