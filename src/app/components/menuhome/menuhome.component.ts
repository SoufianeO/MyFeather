import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service'

@Component({
  selector: 'app-menuhome',
  templateUrl: './menuhome.component.html',
  styleUrls: ['./menuhome.component.scss'],
})
export class MenuhomeComponent implements OnInit {

  slideOptsOne = {
		initialSlide: 0,
		slidesPerView: 2,
		autoplay: true
	};

	books = [];
	trendings = [];
	booksArray = [];
	ActionBooks = [];
	AdventureBooks = [];
	HorrorBooks = [];
	Romancebooks = [];
	searchText: string = '';
	actionBooks: number = 0;
	horrorBooks: number = 0;
	adventureBooks: number = 0;
	romanceBooks: number = 0;
	trending = {
		image: '',
		nbrLikes: 0,
		nbrLecture: 0,
		title: ''
	};

	constructor(private bookservice: BookService, public router: Router) {}
	ngOnInit(): void {
		this.bookservice.getBooks().subscribe((list) => {
			this.booksArray = Object.values(list);

			for (let i = 0; i < this.booksArray.length; i++) {
				this.trending.image = this.booksArray[i].payload.val().image;
				this.trending.title = this.booksArray[i].payload.val().nomlivre;
				this.trending.nbrLikes = Object.keys(this.booksArray[i].payload.val().likes).length;
				this.trending.nbrLecture = Object.keys(this.booksArray[i].payload.val().lecturelivre).length;
				//console.log(this.trending);
				this.trendings.push(this.trending);
				this.trending = {image: '',
        nbrLikes: 0,
        nbrLecture: 0,
        title: ''};
			}

			for (let i = 0; i < this.booksArray.length; i++) {
				switch (this.booksArray[i].payload.val().categorie) {
					case 'romance': {
						this.romanceBooks++;
						this.Romancebooks.push(this.booksArray[i].payload.val());
						break;
					}
					case 'action': {
						this.actionBooks++;
						this.ActionBooks.push(this.booksArray[i].payload.val());
						break;
					}
					case 'aventure': {
						this.adventureBooks++;
						this.AdventureBooks.push(this.booksArray[i].payload.val());
						break;
					}
					case 'horreur': {
						this.horrorBooks++;
						this.HorrorBooks.push(this.booksArray[i].payload.val());
						break;
					}
				}
			}

			this.books = list.map((item) => {
				return item.payload.val();
			});
		});
	}

	isFull() {
		if (this.searchText == '') {
			return false;
		}
	}

	filterCondition(book) {
		return book.nomlivre.toLowerCase().indexOf(this.searchText.toLocaleLowerCase()) != -1;
	}

	getActionBooks() {
		return this.actionBooks;
	}
	getAdventureBooks() {
		return this.adventureBooks;
	}
	getRomanceBooks() {
		return this.romanceBooks;
	}
	getHorrorBooks() {
		return this.horrorBooks;
	}

	listerBooks(s: string) {
		switch (s) {
			case 'Romance': {
				this.bookservice.setBooksCtegorire(this.Romancebooks);
				console.log(this.bookservice.getBooksCategorie());
				this.router.navigateByUrl('tabs/tab1/categories');
				break;
			}
			case 'Action': {
				this.bookservice.setBooksCtegorire(this.ActionBooks);
				this.router.navigateByUrl('tabs/tab1/categories');
				break;
			}
			case 'Adventure': {
				this.bookservice.setBooksCtegorire(this.AdventureBooks);
				this.router.navigateByUrl('tabs/tab1/categories');
				break;
			}
			case 'Horror': {
				this.bookservice.setBooksCtegorire(this.HorrorBooks);
				this.router.navigateByUrl('tabs/tab1/categories');
				break;
			}
		}
  }

  onSelect(titre){
  
    let nodeearray = []
    let regexp = new RegExp('^[a-zA-Z]');
       for(let c in titre){
          if(regexp.test(titre[c])){
            nodeearray.push(titre[c].toLowerCase());
          }
       }
     const nodename = nodeearray.join("");
     this.router.navigate(['tabs/tab1/book', nodename]);
  }


}