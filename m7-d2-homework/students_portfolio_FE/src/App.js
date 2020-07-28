
    import React, { Component } from 'react'
    import StudentList from './components/StudentList';
    
    
    export default class App extends Component {
      state = {
        students: []
      }
      render() {
        return (
          <header className="app-background">
          <div>
            <h1 className="display-3 text-center header">Students</h1>
            <StudentList students={this.state.students} />
          </div>
          </header>
        )
      }
      
      componentDidMount = async ()=>{
        const res = await fetch("http://localhost:3006/students")
     
        const students = await res.json()
        this.setState({
          students: students
        })
      }
    }
    
    
    
    