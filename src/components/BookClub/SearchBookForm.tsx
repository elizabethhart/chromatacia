import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';

interface SearchBookFormProps {
    searchBook: any
}

interface SearchBookFormState {
}

export default class SearchBookForm extends React.Component<SearchBookFormProps, SearchBookFormState> {
    private titleRef: any
    private authorRef: any

    constructor(props: SearchBookFormProps) {
        super(props)

        this.titleRef = React.createRef()
        this.authorRef = React.createRef()
    }

    searchBook = (event: any) => {
        event.preventDefault()

        const search = {
            title: this.titleRef.current.value,
            author: this.authorRef.current.value
        }

        this.props.searchBook(search)

        event.currentTarget.reset()
    }

    render() {
        return (
            <>
                <h2>Search for a Book:</h2>
                <Form className="book-form" onSubmit={this.searchBook}>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Control name="title" ref={this.titleRef} type="text" placeholder="Title" />
                                <Form.Text></Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Control name="author" ref={this.authorRef} type="text" placeholder="Author" />
                                <Form.Text></Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="primary" type="submit">
                                Search Goodreads
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </>
        )
    }

}
