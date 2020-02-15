import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

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
            <Container>
                <Row>
                    <Col sm={4}>
                        <Form className="book-form" onSubmit={this.createBook}>
                            <Form.Group>
                                <Form.Control type="text" ref={this.titleRef} placeholder="Title" />
                                <Form.Text></Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control ref={this.authorRef} type="text" placeholder="Author" />
                                <Form.Text></Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control name="pages" ref={this.pagesRef} type="number" placeholder="Pages" />
                                <Form.Text></Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control name="goodReadsRating" ref={this.goodReadsRatingRef} type="text" placeholder="Goodreads Rating" />
                                <Form.Text></Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control name="goodReadsReviewCount" ref={this.goodReadsReviewCountRef} type="number" placeholder="Goodreads Reviews" />
                                <Form.Text></Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                + Add Book
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default AddBookForm