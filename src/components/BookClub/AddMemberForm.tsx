import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

interface AddMemberFormProps {
    members: Member[],
    addMember: any
}

interface AddMemberFormState {
    members: any[]
}

interface Member {
    name: string
}

interface Members {
    [index: number]: any
}

class AddMemberForm extends React.Component<AddMemberFormProps, AddMemberFormState> {
    private nameRef: any

    constructor(props: AddMemberFormProps) {
        super(props)

        this.nameRef = React.createRef()
    }

    createMember = (event: any) => {
        event.preventDefault()

        const member = {
            name: this.nameRef.current.value,
        }

        this.props.addMember(member)

        event.currentTarget.reset()
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col sm={4}>
                        <Form className="member-form" onSubmit={this.createMember}>
                            <Form.Group>
                                <Form.Control type="text" ref={this.nameRef} placeholder="Name" />
                                <Form.Text></Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                + Add Member
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default AddMemberForm