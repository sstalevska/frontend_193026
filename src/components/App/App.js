import './App.css';
import React,{Component} from "react";
import Books from '../Books/BookList/books';
import LibraryService from "../../repository/libraryRepository";
import {BrowserRouter,  Router, Redirect, Route, Routes} from 'react-router-dom'
import Categories from "../Categories/categories";
import Header from "../Header/header";
import Authors from "../Authors/authors";
import BookAdd from "../Books/BookAdd/bookAdd";
import BookEdit from "../Books/BookEdit/bookEdit";

class App extends Component {

    constructor(props) {
        super(props);
        //state e objekt {}
        this.state = {
            //books e prop
            books: [],
            categories: [],
            authors: [],
            selectedBook: {}

        }
    }

    render() {
        return (
            <BrowserRouter>
                <Header/>
                <main>
                    <div className="container" >
                        <Route path={"/categories"} exact render={() => <Categories categories={this.state.categories}/>} />
                        <Route path={"/authors"} exact render={() => <Authors authors={this.state.authors}/>} />
                        <Route path={"/books/add"} exact render={() =>
                            <BookAdd categories={this.state.categories}
                                      authors={this.state.authors}
                                      onAddBook={this.addBook}/>}/>
                        <Route path={"/books/edit/:id"} exact render={() =>
                            <BookEdit categories={this.state.categories}
                                     authors={this.state.authors}
                                     onEditBook={this.editBook}
                                     book={this.state.selectedBook}
                            />}/>
                        <Route path={"/books"} exact render={() => <Books books={this.state.books}
                                                                          onDelete={this.deleteBook}
                                                                          onMarked={this.markAsTaken}
                                                                          onEdit={this.getBook}/>} />
                        <Route path={"/"} exact render={() => <Books books={this.state.books}
                                                                     onDelete={this.deleteBook}
                                                                     onMarked={this.markAsTaken}
                                                                     onEdit={this.getBook}/>} />

                    </div>
                </main>

            </BrowserRouter>

        );
    }
    loadBooks = () => {
        LibraryService.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }
    loadCategories = () => {
        LibraryService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            });
    }
    loadAuthors = () => {
        LibraryService.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            });
    }

    deleteBook = (id) => {
        LibraryService.deleteBook(id)
            .then(() => {
                this.loadBooks();
            });
    }
    markAsTaken = (id) => {
        LibraryService.mark(id)
            .then(() => {
                this.loadBooks();
            });
    }
    addBook = (name,authorId,category,availableCopies) =>{
        LibraryService.addBook(name,authorId,category,availableCopies)
            .then(()=>{
                this.loadBooks();
            });
    }

    getBook = (id) =>{
        LibraryService.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }

    editBook = (id, name,authorId,category,availableCopies) =>{
        LibraryService.editBook(id,name,authorId,category,availableCopies)
            .then(()=>{
                this.loadBooks();
            });
    }


    componentDidMount() {
        this.loadBooks();
        this.loadCategories();
        this.loadAuthors();
    }
}

    export default App;
