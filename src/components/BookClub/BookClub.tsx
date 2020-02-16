import React from 'react';
import base from '../../base';
import './BookClub.scss';
import AddBookForm from './AddBookForm';

interface BookClubProps {
    match: any
}

interface BookClubState {
    books: any[],
    members: any[]
}

interface Book {
    title: string,
    author: string,
    pages: number,
    goodReadsRating: string,
    goodReadsReviewCount: number
}

interface Books {
    [index: number]: any
}

interface Month {
    name: string,
    year: number,
    bookId: number,
}

interface Member {
    name: string,
}

export default class BookClub extends React.Component<BookClubProps, BookClubState> {
    ref: any

    constructor(props: BookClubProps) {
        super(props);

        this.state = { 
            books: [],
            members: []
         };
    }

    componentDidMount() {        
        this.ref = base.syncState(`books`, {
            context: this,
            asArray: true,
            state: 'books'
        });

        this.ref = base.syncState(`members`, {
            context: this,
            asArray: true,
            state: 'members'
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addBook = (book: Book) => {
        const books = [ ...this.state.books ];

        books.push(book)

        this.setState({ books })
    }

    updateBook = (index: number, updatedBook: Book) => {
        const books = [ ...this.state.books ]

        books[index] = updatedBook

        this.setState({ books })
    }

    deleteBook = (index: number) => {
        const books = [ ...this.state.books ]

        books[index] = null;

        this.setState({ books })
    }

    loadSampleMembers = () => {
        this.setState({ members: [{
            name: 'Liz'
        }] })
    }

    render() {
        return (
            <>
                <ul>
                    {this.state.books.length ? this.state.books.map((item: Book, key: number) =>
                        <li key={key}>
                            {item.title}
                            <strong onClick={() => this.deleteBook(key)}>&times;</strong>
                        </li>
                    ) : null}
                </ul>

                <AddBookForm books={this.state.books} addBook={this.addBook}/>

                <ul>
                    {this.state.members.length ? this.state.members.map((item: Member, key: number) =>
                        <li key={key}>
                            {item.name}
                        </li>
                    ) : null}
                </ul>
            </>
        );
    }
}
