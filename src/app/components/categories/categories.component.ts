import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  categorieBooks = [];

	constructor(private bookservice: BookService) {}

	ngOnInit() {
		this.categorieBooks = this.bookservice.getBooksCategorie();
		console.log(this.categorieBooks);
	}
}
