//MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { FirebaseUIModule } from 'firebaseui-angular';
import { AngularFireModule } from 'angularfire2';


//OTHER
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';


//FIREBASE

import { AngularFireStorageModule } from 'angularfire2/storage'
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';

//SERVICES 
import { BookService } from './services/book.service'
import { CoverService } from './services/cover.service'
import { MotsclesService } from './services/motscles.service'
import { ChapitreService } from './services/chapitre.service'
import { AuthService } from './services/auth.service'
import { UsersService } from './services/users.service'
 

//MODELS
import { Book } from '../app/models/book';
import { Cover } from '../app/models/cover'
import { Motscles } from '../app/models/motscles'
import { Chapitre } from '../app/models/chapitre'

//PLUGINS 

import { Camera } from '@ionic-native/camera/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx'
import { File } from '@ionic-native/file/ngx'
import { Base64 } from '@ionic-native/base64/ngx'
import { FilePath }  from '@ionic-native/file-path/ngx'



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,FirebaseUIModule, AngularFireStorageModule, AngularFireModule.initializeApp(environment.firebaseConfig),
     IonicModule.forRoot(), AppRoutingModule,FormsModule,ReactiveFormsModule, AngularFireDatabaseModule],
  providers: [
    StatusBar,
    SplashScreen,
    BookService, 
    CoverService,
    MotsclesService,
    Book,
    Cover,
    Motscles,
    AngularFireDatabase,
    Camera,
    FileChooser,
    File,
    Base64,
    FilePath,
    ChapitreService,
    Chapitre,
    AngularFireDatabase,
    AuthService,
    UsersService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
