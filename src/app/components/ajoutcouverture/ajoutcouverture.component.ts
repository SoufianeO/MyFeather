import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { BookService } from '../../services/book.service'
import { CoverService } from '../../services/cover.service'
import { Cover } from '../../models/cover'
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'
import { File } from '@ionic-native/file/ngx'
import {FilePath} from '@ionic-native/file-path/ngx'
import { Base64 } from '@ionic-native/base64/ngx'
import { Router } from '@angular/router'


@Component({
  selector: 'app-ajoutcouverture',
  templateUrl: './ajoutcouverture.component.html',
  styleUrls: ['./ajoutcouverture.component.scss'],
})
export class AjoutcouvertureComponent implements OnInit {
  image='https://www.kasterencultuur.nl/editor/placeholder.jpg'
  textData="hey" 
  textPath="hey"
  fs:string

  constructor(public formbuilder:FormBuilder, public cover:Cover,
              public coverService:CoverService,
              public bookService:BookService,
              public camera:Camera,
              public fileChooser:FileChooser,
              public file:File,
              public filePath:FilePath,
              public router:Router
              ) { }

  coverForm = this.formbuilder.group({
                titre: [''],
              });
  
  

  ngOnInit() {}

  submit(){
    this.cover.titrecouverture = this.coverForm.value.titre;
    this.cover.contenu = this.textData;
    this.coverService.createCover(this.cover, this.bookService.getNameNode(), this.image).then( map => {
      this.router.navigateByUrl('/tabs/tab1');
    })
  }

  async addText(){
    await this.openText();
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

 async openText(){
     
   return await this.fileChooser.open().then(url => {
     this.file.resolveLocalFilesystemUrl(url).then(newUrl => {
     this.filePath.resolveNativePath(url).then((path) => {
     let dirPath = path;
     let dirPathSegments = dirPath.split('/');
     let nameFile = dirPathSegments[dirPathSegments.length-1];
     dirPathSegments.pop();
     dirPath = dirPathSegments.join('/');
     alert(dirPath);
     alert(nameFile);
     this.file.readAsText(dirPath,nameFile).then(( (content) => {
      this.textData = content;
    }), (err) => {
     alert("error");
    });
    });
     } );
   } );
 }



}
