import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';

interface AddBookFormProps {
    books: Book[],
    addBook: any
}

interface AddBookFormState {
    books: any[]
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

class AddBookForm extends React.Component<AddBookFormProps, AddBookFormState> {
    private titleRef: any
    private authorRef: any
    private pagesRef: any
    private goodReadsRatingRef: any
    private goodReadsReviewCountRef: any

    constructor(props: AddBookFormProps) {
        super(props)

        this.titleRef = React.createRef()
        this.authorRef = React.createRef()
        this.pagesRef = React.createRef()
        this.goodReadsRatingRef = React.createRef()
        this.goodReadsReviewCountRef = React.createRef()
    }

    createBook = (event: any) => {
        event.preventDefault()

        const book = {
            title: this.titleRef.current.value,
            author: this.authorRef.current.value,
            pages: this.pagesRef.current.value,
            goodReadsRating: this.goodReadsRatingRef.current.value,
            goodReadsReviewCount: this.goodReadsReviewCountRef.current.value
        }

        this.props.addBook(book)

        event.currentTarget.reset()
    }

    render() {
        return (
            <>
                <h2>Add New Book:</h2>
                <Form className="book-form" onSubmit={this.createBook}>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Control type="text" ref={this.titleRef} placeholder="Title" />
                                <Form.Text></Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Control ref={this.authorRef} type="text" placeholder="Author" />
                                <Form.Text></Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Control name="goodReadsReviewCount" ref={this.goodReadsReviewCountRef} type="number" placeholder="Goodreads Reviews" />
                                <Form.Text></Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Control name="goodReadsRating" ref={this.goodReadsRatingRef} type="text" placeholder="Goodreads Rating" />
                                <Form.Text></Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Control name="pages" ref={this.pagesRef} type="number" placeholder="Pages" />
                                <Form.Text></Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button variant="primary" type="submit">
                                + Add Book
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </>
        )
    }

}

export default AddBookForm