import React from 'react';
import {Link} from "react-router-dom";


const bookTerm = (props) => {
    return (
        <tr>
            <td scope={"col"}>{props.term.name}</td>
            <td scope={"col"}>{props.term.category}</td>
            <td scope={"col"}>{props.term.author.name} {props.term.author.surname}</td>
            {}
            <td scope={"col"}>{props.term.availableCopies}</td>
            <td className={"text-right"}>
                <Link title={"Edit"} className={"btn btn-primary"}
                      onClick={ () => props.onEdit(props.term.id)}
                      to={`/books/edit/${props.term.id}`}  >Edit </Link>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                <a title={"MarkAsTaken"} className={"btn btn-success m-2"}
                   onClick={() => props.onMarked(props.term.id)}>
                    Mark as Taken
                </a>

            </td>

        </tr>
    )
}

export default bookTerm;
