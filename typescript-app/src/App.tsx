import React from 'react'
import './App.css'
import Header from './components/Header2'
import  Container   from 'react-bootstrap'
import  Navbar from 'react-bootstrap'
import  Nav  from 'react-bootstrap'
import   Form  from 'react-bootstrap'
import   FormControl  from 'react-bootstrap'


import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import DetailComponent from './components/DetailComponent'
import Albums from './components/Albums'
// import { HeaderProps } from '../types/types'
import 'bootstrap/dist/css/bootstrap.min.css';





class App extends React.Component {



    //  componentDidMount () {
    //   fetch("https://deezerdevs-deezer.p.rapidapi.com/search"+ "?q="+ searchString , {
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    //         "x-rapidapi-key": "8275c582bamshd83a3179dd00459p19f0b2jsn94c889368579"
    //     }
    // })
    //   .then((response) => response.json())
    //   .then((responseObject) =>
    //     this.setState({ searchedMovies: responseObject.Search })
    //   );
    //  }

render () {
 
  return (
    <Router>
      <div className="App">
                
       <Container>         
        <Navbar style={{padding: '20px'}}>
              <Navbar.Brand href="#home" style={{color: '#fff'}}>AC/DC</Navbar.Brand>
              <Nav className="mr-auto ">
                <Link to="/" className='ml-4 mr-3 text-white'>Home</Link>
                <Link to="/Albums" className='text-white'>Albums</Link>
             
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{borderRadius: '50px', padding: '5px 30px',border: 'none' }}/>
                <Button variant="outline-info" style={{border: '1px solid #fff', color: '#fff', borderRadius: '50px', padding: '5px 30px'}}>Search</Button>
              </Form>
            </Navbar>
          </Container>   
        <Header title="Your tracklist for Anytime" />

         <Route  path='/album' exact component={Albums} />
          <Route
            path="/album/:id"
            exact
            render={(props) => <DetailComponent {...props} tracks={['one', 'two']} />}
          />
  
      </div>
    </Router>
  )
}
  
}

export default App