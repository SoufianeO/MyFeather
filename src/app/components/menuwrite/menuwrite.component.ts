import { Component, OnInit, Renderer2, ViewChild, ElementRef} from '@angular/core';
import { FormBuilder } from '@angular/forms'
import {Router} from '@angular/router'
import { BookService } from '../../services/book.service';
import { MotsclesService } from '../../services/motscles.service';
import { Book } from '../../models/book'
import { Motscles } from '../../models/motscles';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LoadingController,  AlertController } from '@ionic/angular'


@Component({
  selector: 'app-menuwrite',
  templateUrl: './menuwrite.component.html',
  styleUrls: ['./menuwrite.component.scss'],
})
export class MenuwriteComponent implements OnInit {
  case:string;
  categorie:any;
  motscles=[]
  motsclesdiv=[]
  count:number=0
  nodeearray=[]
  nodename=''
  image='https://www.kasterencultuur.nl/editor/placeholder.jpg'
  
  livreForm = this.formbuilder.group({
    titre: [''],
    motcles:[''],
    categorie:[''],
    resume:['']
  });
  
 

  @ViewChild('motclesdiv',{static: false}) div: ElementRef;
 
  
  constructor(private formbuilder: FormBuilder,
      public book:Book, public  list:Motscles
    , private renderer: Renderer2, public bookService:BookService
    , public router:Router, public motsclesservice:MotsclesService
    , public camera:Camera) { 
    
  }


  ngOnInit() {
  }

  submit(){
    
    let regexp = new RegExp('^[a-zA-Z]');
    if(this.livreForm.value.titre!=null){
       for(let c in this.livreForm.value.titre){
          if(regexp.test(this.livreForm.value.titre[c])){
            this.nodeearray.push(this.livreForm.value.titre[c].toLowerCase());
          }
       }
      this.nodename = this.nodeearray.join("");
      this.book.nomlivre = this.livreForm.value.titre;
      this.book.resume = this.livreForm.value.resume;
      this.bookService.setNameNode(this.nodename);
          this.bookService.createBook(this.book, this.nodename, this.image).then( () => 
          {  this.list.motscles.push(this.categorie);
             this.list.motscles = this.list.motscles.concat(this.motscles);
             this.motsclesservice.createMotscles(this.list,this.nodename).then( map=>
             {
              this.router.navigateByUrl('/tabs/tab3/ajoutcouverture');
           });
          }   
     )
        
    }
  }









  ajoutermotcles(){
    console.log(this.livreForm.value.motcles);
    if(!this.motscles.includes(this.livreForm.value.motcles) && this.livreForm.value.motcles!=null &&this.livreForm.value.motcles!=""){
    const motcle: HTMLDivElement = this.renderer.createElement('div');
    motcle.innerHTML = this.livreForm.value.motcles;
    this.motscles.push(this.livreForm.value.motcles);
   
    motcle.setAttribute("id",this.livreForm.value.motcles);
    this.motsclesdiv.push(motcle);
    this.count++;   
    this.renderer.appendChild(this.div.nativeElement, motcle);
    }

 
    
    




  }
  supprimermotcles(){
    if (this.count>0 ){
    this.motsclesdiv[this.count-1].remove();
    this.motsclesdiv.splice(this.count-1,1);
    this.motscles.splice(this.count-1,1);
    this.count--;
    }
  }

  RadioChangeEvent(event){
    this.categorie = event.detail.value;
    this.book.categorie = this.categorie;
  }

  async addPhoto(){
     const libraryImage = await this.openLibrary();
     this.image = 'data:image/jpg;base64,'+ libraryImage;
  }

  async openLibrary(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    return await this.camera.getPicture(options);
  }





  

}
