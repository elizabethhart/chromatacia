import React from 'react';
import base from '../../base';
import './BookClub.scss';
import AddBookForm from './AddBookForm';
import SearchBookForm from './SearchBookForm';
import AddMemberForm from './AddMemberForm';
import axios from 'axios';
import { Col, Container, Row, Table } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

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

    addMember = (member: Member) => {
        const members = [ ...this.state.members ];

        members.push(member)

        this.setState({ members })
    }

    updateBook = (index: number, updatedBook: Book) => {
        const books = [ ...this.state.books ]

        books[index] = updatedBook

        this.setState({ books })
    }

    updateMember = (index: number, updatedMember: Member) => {
        const members = [ ...this.state.members ]

        members[index] = updatedMember

        this.setState({ members })
    }

    deleteBook = (index: number) => {
        const books = [ ...this.state.books ]

        books[index] = null;

        this.setState({ books })
    }

    deleteMember = (index: number) => {
        const members = [ ...this.state.members ]

        members[index] = null;

        this.setState({ members })
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
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
                'Access-Control-Allow-Credentials': true
            },
            crossdomain: true
        };

        axios.get('http://localhost:5000/books', config)
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
                <Row className="row-style">
                    <Col>
                        <SearchBookForm searchBook={this.searchBookByTitle} />
                    </Col>
                </Row>

                <Row className="row-style">
                    <Col>
                        <h2>Books Added:</h2>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>Pages</th>
                                    <th>Goodreads Rating</th>
                                    <th>Goodreads Reviews</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.books.length ? this.state.books.map((item: Book, key: number) =>
                                    <tr key={key}>
                                        <td>{item.title}</td>
                                        <td>{item.author}</td>
                                        <td>{item.pages}</td>
                                        <td>{item.goodReadsRating}</td>
                                        <td>{item.goodReadsReviewCount}</td>
                                        <td onClick={() => this.updateBook(key, item)}><i className="fa fa-edit"></i></td>
                                        <td onClick={() => this.deleteBook(key)}><i className="fa fa-trash"></i></td>
                                    </tr>
                                ) : null}
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                <Row className="row-style">
                    <Col>
                        <AddBookForm books={this.state.books} addBook={this.addBook}/>
                    </Col>
                </Row>

                <Row className="row-style">
                    <Col>
                        <h2>Club Members:</h2>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.members.length ? this.state.members.map((item: Member, key: number) =>
                                    <tr key={key}>
                                        <td>{item.name}</td>
                                        <td onClick={() => this.updateMember(key, item)}><i className="fa fa-edit"></i></td>
                                        <td onClick={() => this.deleteMember(key)}><i className="fa fa-trash"></i></td>
                                    </tr>
                                ) : null}
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                <Row className="row-style">
                    <Col>
                        <AddMemberForm members={this.state.members} addMember={this.addMember}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}
