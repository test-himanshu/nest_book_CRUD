import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";


@Injectable()
export class BookService {
    public books : Book[] = [];

    //add book
    addBookService(book : Book) : string {
        this.books.push(book);
        return "Book has been sucessfully added";
    }


    //update book
    updateBookService(book : Book) : string {
        let index = this.books.findIndex((currentBook)=>{
            return currentBook.id == book.id;
        });
        this.books[index] = book;
        return `Book has been successfully updated`;
    }


    //delete book
    deleteBookService(bookId : string) : string{
        this.books = this.books.filter((book)=>{
            return book.id != bookId;
        });
        return `Book has boon deleted`;
    }

    //find all book
    findAllBooks() : Book[] {
    return this.books;
    }
}