import axios from '../custom-axios/axios';

const LibraryService={
    fetchBooks: () => {
        return axios.get("/books");
    },
    fetchCategories: () => {
        return axios.get("/books/categories");
    },
    fetchAuthors: () => {
        return axios.get("/books/authors");
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },
    mark: (id) => {
        return axios.get(`/books/mark/${id}`);
    },
    addBook: (name, category, authorId, availableCopies) => {
        return axios.post("/books/add", {
            "name": name,
            "category": category,
            "authorId": authorId,
            "availableCopies": availableCopies

        });
    },
    editBook: (id, name, category, authorId, availableCopies) => {
        return axios.put(`/books/edit/${id}`, {
            "name": name,
            "category": category,
            "authorId": authorId,
            "availableCopies": availableCopies
        });
    },
     getBook: (id) => {
         return axios.get(`/books/${id}`);
     },


}

export default LibraryService;