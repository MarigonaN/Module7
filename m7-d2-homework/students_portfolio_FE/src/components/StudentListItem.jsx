import React, { Component } from "react"
import { Col,  Button, Card } from "react-bootstrap"

class StudentListItem extends Component {
    render() {
        const { name, surname, email, Country } = this.props.item
        return (
            <>
           
            <Col md={8}>
                <Card style={{ width: '18rem', marginBottom: "10px" }}>
                   
                    <Card.Body>
                        <Card.Title>{name} - {surname}</Card.Title>
                        <Card.Text>
                            {email}
                    </Card.Text>
                    <Card.Text>
                            {Country}
                    </Card.Text>
                        <Button variant="danger">Delete</Button>
                    </Card.Body>
                </Card>

            </Col>
          
            </>
        )
    }
}

export default StudentListItem