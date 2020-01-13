import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service'
import { Book } from 'src/app/models/book';
import { MotsclesService } from '../../services/motscles.service'



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  imagebook:string
  bookGet={
    categorie:"",
    chapitres:[],
    nomlivre:"",
    resume:"",
    commntaireslivre:{},
    lecturelivre:{},
    likes:{},
    image:"",
    scenarios:[]
  }
  x = [];
  motsCles = []; 
  chapitres = [];
  scenarios = [];
  scenario = {
    tabchapitres:[],
    titre:''
  }
  book = { categorie:'',
  image:'',
  nomlivre:'',
  username:'',
  resume:'',
  chapitres:{},
  commentaireslivres:{},
  couverture:{},
  lecturelivre:{},
  likes:{},
  nombrecommentaireslivre:0,
  nombrelikeslivre:0,
  nombrelectureslivre:0,
  }
 
  constructor(private route:ActivatedRoute,
              public bookService:BookService, 
              public motsclesService:MotsclesService) { }

  ngOnInit() {
    let nodeName = this.route.snapshot.paramMap.get('id');
     this.bookService.getBook(nodeName).subscribe((dataSnapshot) => {
      dataSnapshot.forEach(element => {
        this.bookGet[element.key] = element.payload.val();
      });     
       this.book.nomlivre=  this.bookGet.nomlivre;
       this.book.resume = this.bookGet.resume;
       this.book.nombrecommentaireslivre  = Object.keys(this.bookGet.commntaireslivre).length;
       this.book.nombrelectureslivre = Object.keys(this.bookGet.lecturelivre).length;
       this.book.nombrelikeslivre = Object.keys(this.bookGet.likes).length;
       console.log(this.bookGet.likes);
       this.imagebook = this.bookGet.image;      
       this.chapitres = this.bookGet.chapitres;
       this.x = this.bookGet.scenarios;
       this.x.forEach(scenario => {
       this.scenario.titre = scenario.titre;
       let tabchap = [];
          Object.keys(scenario.chapitres).forEach(function(k){
            tabchap.push(scenario.chapitres[k]);
          });
          this.scenario.tabchapitres = tabchap;
          this.scenarios.push(this.scenario);
       });
   });
   this.motsclesService.getMotsCles(nodeName).subscribe(datasnapshot =>
     {datasnapshot.forEach( element =>{
        this.motsCles.push(element.payload.val());
     }
     )
     }
   );
 }

}
