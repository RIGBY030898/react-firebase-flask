import React, { Component } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0,
            name: '',
            password: '',
        }

        this.add = this.add.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.submit = this.submit.bind(this)
    }

    add() {
        this.setState({
            number: this.state.number + 1,
        })
    }

    handleChangeName({ target: { value } }) {
        this.setState({
            name: value,
        })
    }

    handleChangePassword({ target: { value } }) {
        this.setState({
            password: value,
        })
    }

    submit(e) {
        e.preventDefault()
        console.log(this.state.name, this.state.password)
        this.setState({
            name: '',
            password: '',
        })
    }

    render() {
        const { number, name, password } = this.state

        return (
            <Container>
                <Row>
                    <Col sm={2} xl={4}></Col>
                    <Col sm={8} xl={4}>
                        <Form onSubmit={this.submit}>
                            <Form.Group controlId='formBasicEmail'>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Ingrese nombre'
                                    onChange={this.handleChangeName}
                                    value={name}
                                />
                            </Form.Group>

                            <Form.Group controlId='formBasicPassword'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Password'
                                    onChange={this.handleChangePassword}
                                    value={password}
                                />
                            </Form.Group>
                            <Form.Group controlId='formBasicCheckbox'>
                                <Form.Check type='checkbox' label='Check me out' />
                            </Form.Group>
                            <Button variant='primary' type='submit'>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App
