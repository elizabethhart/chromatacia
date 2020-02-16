import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

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
            <Container>
                <Row>
                    <Col sm={4}>
                        <Form className="book-form" onSubmit={this.searchBook}>
                            <Form.Group>
                                <Form.Control name="title" ref={this.titleRef} type="text" placeholder="Title" />
                                <Form.Text></Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control name="author" ref={this.authorRef} type="text" placeholder="Author" />
                                <Form.Text></Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Search Goodreads
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }

}
