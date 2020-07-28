import React, {Component} from "react"
import {Container, Row} from "react-bootstrap"
import StudentListItem from "./StudentListItem"

class StudentList extends Component {
    state = {
        students: []
      }
    render (){
        return(
            <Container >
                <Row>
                    {this.state.students.map(x => <StudentListItem key={x._id} item={x} />)}
                </Row>
            </Container>
        )
    }
    componentDidMount = async ()=>{
        const res = await fetch("http://localhost:3007/students")
       
        const students = await res.json()
        this.setState({
          students: students      })
      }
}

export default StudentList