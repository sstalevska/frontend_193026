import React from 'react';

const header = (props) => {

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">
                <a className="navbar-brand" href="/books">Library Application</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="navbar-brand" href="/books">All Books</a>
                        </li>
                        <li className="nav-item active">
                            <a className="navbar-brand" href="/categories">All Categories</a>
                        </li>
                        <li className="nav-item active">
                            <a className="navbar-brand" href="/authors">All Authors</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}

export default header;
