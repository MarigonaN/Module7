import React from 'react';
import { Button } from 'react-bootstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {connect} from 'react-redux'
const increment = (dispatch) => {  //action creator
  dispatch({
    type: 'INCREMENT'
  })
}
const decrement = (dispatch) => {  //action creator
  dispatch({
    type: 'DECREMENT'
  })
}
const mapStateToProps = (state) => ({...state})
function App({props}) {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="info">
          +
        </Button>
        {props.count}
        <Button variant="info">
          -
        </Button>
       
    
      </header>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
