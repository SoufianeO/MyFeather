import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  email:string 

  constructor( public database: AngularFireDatabase) { }

  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
}

signInUser(email: string, password: string) {
  return new Promise(
    (resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    }
  );
}

signOutUser() {
  firebase.auth().signOut();
}

setUsername(email:string){
  this.email = email;
}

getUsename(){
  return this.email;
}


getUsernameByGmail(){
  return this.database.list('/users').snapshotChanges();
}

}
