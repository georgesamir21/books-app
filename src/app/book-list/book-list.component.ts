import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList;
  isDisplayed: boolean;

  constructor(
    private booksService: BooksService
  ) { }

  ngOnInit() {
    this.isDisplayed = true;

    this.booksService.getBookList().toPromise()
      .then((books) => {
        this.bookList = books;
      })
      .catch((error) => {
        console.log(error);
      })
  }

  clearBookList() {
    // clear the list
    this.isDisplayed = false;
  }

  showBookList() {
    // show the list
    this.isDisplayed = true;

  }

}
