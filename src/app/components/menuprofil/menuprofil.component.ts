import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import {AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-menuprofil',
  templateUrl: './menuprofil.component.html',
  styleUrls: ['./menuprofil.component.scss'],
})
export class MenuprofilComponent implements OnInit {
 
  user = {

    about:'',
    image:'',
    age: null,
    email: '',
    followers: {},
    following: {},
    nbfollowers: null,
    nbfollowing: null,
    historique: {},
    nom: '',
    prenom: '',
    role: '',
    username: '',
    ville: ''
  }

  constructor(private route: ActivatedRoute, 
    private userService: UsersService,
    private authService:AuthService) { }

  ngOnInit() {
   // let username = this.authService.getUsename();

    this.userService.getUserApi("ahmed19").subscribe(
      (datasnapshot) => {
        datasnapshot.forEach(
          snapshot=>{
          this.user[snapshot.key] = snapshot.payload.val();
          }
        );
     
      }
    );
  }

}


