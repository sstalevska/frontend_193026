import React from 'react';
import {useHistory} from "react-router-dom";




const productEdit  = (props) => {


    const history = useHistory();
    const [formData, updateFormData] = React.useState(
        {
            name: "",
            authorId: 101,
            category: 1,
            availableCopies: 0
        }
    )

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {

        const name = formData.name !== "" ? formData.name : props.book.name ;
        const authorId = formData.authorId !== 0 ? formData.authorId: props.book.authorId ;
        const category = formData.category !== 0 ?  formData.category :  props.book.category ;
        const availableCopies = formData.availableCopies !== 0 ?  formData.availableCopies : props.book.availableCopies;

        props.onEditBook(props.book.id, name, category, authorId,availableCopies);
        history.push("/books");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder={props.book.name}
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Authors</label>
                        <select name="authorId" className="form-control" onChange={handleChange} >
                            {props.authors.map((term) =>
                                <option value={term.id}>{term.name} {term.surname}</option>
                            )}
                        </select>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categories.map((term) =>{
                                    if (props.book.category !== undefined &&
                                        props.book.category === term)
                                        return <option selected={props.book.category} value={term}> {term} </option>
                                    else return <option value={term}>{term}</option>
                                }
                            )}
                        </select>
                    </div>

                    <br></br>
                    <div className="form-group">
                        <label htmlFor="availableCopies">Available Copies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder={props.book.availableCopies}
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default productEdit;