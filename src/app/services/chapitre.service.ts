import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage'
import { Chapitre } from '../models/chapitre'
@Injectable({
  providedIn: 'root'
})
export class ChapitreService{

  constructor(private database:AngularFireDatabase,
    private afbs:AngularFireStorage
  ) { 
  }

createCover(chapitre:Chapitre,nameNode:string, image:any){
  let imagePath ='covers/'+ new Date().getTime() + '.jpg';
    return this.afbs.ref(imagePath).putString(image,'data_url').then( () => {
       const ref = this.afbs.ref(imagePath);
       ref.getDownloadURL().subscribe(url => {
        chapitre.image = url;
    return this.database.list('/livres/'+ nameNode).set("chapitre",chapitre);
    });
});

}


getChapitres(nameNode:string){
  return this.database.list('/livres/'+ nameNode +'/chapitres').snapshotChanges();
}


}


