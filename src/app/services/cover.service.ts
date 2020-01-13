import { Injectable } from '@angular/core';
import { Cover } from '../models/cover'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage'


@Injectable({
  providedIn: 'root'
})
export class CoverService {

  constructor(private database:AngularFireDatabase,
    private afbs:AngularFireStorage
  ) { 
  }

createCover(cover:Cover ,nameNode:string, image:any){
  let imagePath ='covers/'+ new Date().getTime() + '.jpg';
    return this.afbs.ref(imagePath).putString(image,'data_url').then( () => {
       const ref = this.afbs.ref(imagePath);
       ref.getDownloadURL().subscribe(url => {
        cover.image = url;
    return this.database.list('/livres/'+ nameNode).set("couverture",cover);
    });
});

}


getCover(nameNode:string){
  return this.database.list('/livres/'+ nameNode +'/couverture').snapshotChanges();
}


}

