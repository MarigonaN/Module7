import React, { Component } from "react"
import { Col,  Button, Card } from "react-bootstrap"

class StudentListItem extends Component {
    render() {
        const { image, name, surname, email, Country } = this.props.item
        return (
            <>
           
            <Col md={8}>
                <Card style={{ width: '20rem', marginBottom: "10px" }}>
                   
                    <Card.Body>
                   <img src={image} style={{width: "250px"}}/>
                        <Card.Title>{name} {surname}</Card.Title>
                        <Card.Text>
                           Email: {email}
                    </Card.Text>
                    <Card.Text>
                          Country:  {Country}
                    </Card.Text>
                      
                    </Card.Body>
                </Card>

            </Col>
          
            </>
        )
    }
}

export default StudentListItem