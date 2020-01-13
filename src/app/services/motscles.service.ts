import { Injectable } from '@angular/core';
import { Motscles } from '../models/motscles';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class MotsclesService {
 
  

  constructor(private database:AngularFireDatabase) { }

  createMotscles(motscles:Motscles,nameNode:string){
    return this.database.list('/motscles').set(nameNode,motscles.motscles);
  }

  getMotsCles(id:string){
      return this.database.list('/motscles/'+ id).snapshotChanges();
  }


}
