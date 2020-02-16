import React from 'react';
import base from '../../base';
import './BookClub.scss';
import AddBookForm from './AddBookForm';
import SearchBookForm from './SearchBookForm';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';

var XMLParser = require('react-xml-parser');

require('dotenv').config();

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
    searchOutput: any

    constructor(props: BookClubProps) {
        super(props);

        this.state = { 
            books: [],
            members: [],
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

    searchBookByTitle = (search: any) => {
        let requestUrl = 'https://www.goodreads.com/book/title.FORMAT?key=' + process.env.REACT_APP_GOODREADS_API_KEY;

        if (search.title) {
            requestUrl += ('&title=' + encodeURIComponent(search.title));
        }

        if (search.author) {
            requestUrl += ('&author' + encodeURIComponent(search.title));
        }

        console.log('requestUrl', requestUrl);

        let config = {
            headers: {'Access-Control-Allow-Origin': '*'},
            crossdomain: true
        };

        axios.get(requestUrl, config)
            .then((res: any) => {
                console.log('res', res);
                let jsonres = new XMLParser().parseFromString(res);
                console.log('json res', jsonres);
                this.searchOutput = jsonres;
            })
            .catch((err: any) => {
                console.log('err', err);
            });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <SearchBookForm searchBook={this.searchBookByTitle} />
                    </Col>
                    <Col>
                        <pre>{this.searchOutput}</pre>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h2>Books Added:</h2>
                        <ul>
                            {this.state.books.length ? this.state.books.map((item: Book, key: number) =>
                                <li key={key}>
                                    {item.title}
                                    <strong onClick={() => this.deleteBook(key)}>&times;</strong>
                                </li>
                            ) : null}
                        </ul>
                    </Col>

                    <Col>
                        <AddBookForm books={this.state.books} addBook={this.addBook}/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h2>Club Members:</h2>
                        <ul>
                            {this.state.members.length ? this.state.members.map((item: Member, key: number) =>
                                <li key={key}>
                                    {item.name}
                                </li>
                            ) : null}
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}
