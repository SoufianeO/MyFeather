import { Component, OnInit } from '@angular/core';
import { CoverService } from '../../services/cover.service'
import { ActivatedRoute } from '@angular/router'
import { Cover } from '../../models/cover'
import { Chapitre } from '../../models/chapitre'
import { ChapitreService } from '../../services/chapitre.service'


@Component({
  selector: 'app-bookcover',
  templateUrl: './bookcover.component.html',
  styleUrls: ['./bookcover.component.scss'],
})
export class BookcoverComponent implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 100,
    effect: 'coverflow'
  };

  couverture = {
    commentaires:{},
    lectures:{},
    image:"",
    titrecouverture:"",
    contenu:"",
  }
   chapitreget = {
    commentaires:{},
    lectures:{},
    image:"",
    titrecouverture:"",
    contenu:"",
  }
  
  
  chapitres=[];
  constructor(public coverService:CoverService,
              public route:ActivatedRoute,
              public cover:Cover,
              public chapitre:Chapitre,
              public chapitreService:ChapitreService
    ) { }
  
  ngOnInit() {
    let nodeName = this.route.snapshot.paramMap.get('id');
    this.coverService.getCover(nodeName).subscribe(datasnapshot => {
       datasnapshot.forEach( snapshot => {
        this.couverture[snapshot.key] = snapshot.payload.val();
       });
       this.cover.contenu = this.couverture.contenu;
       this.cover.titrecouverture = this.couverture.titrecouverture;
       this.cover.nombrecommentaires = Object.keys(this.couverture.commentaires).length;
       this.cover.nombrelectures = Object.keys(this.couverture.lectures).length;
       this.cover.image = this.couverture.image;
       console.log(this.cover.titrecouverture);
    })
    this.chapitreService.getChapitres(nodeName).subscribe( datasnapshot => {
      datasnapshot.forEach( snapshot => {
         this.chapitres[snapshot.key] = snapshot.payload.val();
      });
   })
  }

}
