import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage'




@Injectable({
  providedIn: 'root'
})
export class BookService {
  nameNode:string;
  uploadurl:string;
  booksCategorie = [] ;
	bookList: AngularFireList<any>;


  constructor(private database:AngularFireDatabase, private afbs:AngularFireStorage) { 
  }

  createBook(book: Book,nameNode:string,image:any){
    let imagePath ='books/'+ new Date().getTime() + '.jpg';
    return this.afbs.ref(imagePath).putString(image,'data_url').then( () => {
       const ref = this.afbs.ref(imagePath);
       ref.getDownloadURL().subscribe(url => {
         book.image = url;
         this.database.list('/livres').set(nameNode,book);
       });
    }
    )
      
  }
  
  getNameNode(){
    return this.nameNode;
  }

  setNameNode(nameNode:string){
    this.nameNode = nameNode;
  }

  uploadImageBook(image:any){
    let imagePath ='books/'+ new Date().getTime() + '.jpg';
    return this.afbs.ref(imagePath).putString(image,'data_url');
  }

  getImagebook(path:string){
    let image:any;

  }


  getUploadurl(){
    return this.uploadurl;
  }

  setUploadurl(uploadurl:string){
    this.uploadurl = uploadurl;
  }

  getBook(id:string){
      return this.database.list('/livres/'+ id).snapshotChanges();
    }

   
	getBooks() {
		this.bookList = this.database.list('livres');

		this.bookList.snapshotChanges().subscribe((list) => {
			
		});

		return this.bookList.snapshotChanges();
  }
  


  getTrendingBooks() {
		this.bookList = this.database.list('livres');

		this.bookList.snapshotChanges().subscribe((list) => {
			
		});

		return this.bookList.snapshotChanges();
	}

	getBooksCategorie(){
		return this.booksCategorie ; 
	}
  
	setBooksCtegorire(booksCategorie:any){
		this.booksCategorie=booksCategorie ; 
	}

}
