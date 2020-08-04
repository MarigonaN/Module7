import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Form, Modal, Button, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'


import io from "socket.io-client";

const connOpt = {
  transports: ["websocket"],
};
let socket = io("https://striveschool.herokuapp.com/", connOpt);


function App() {
  const [username, setUsername] = React.useState(null);
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const [showModal, setShowModal] = React.useState(true);


  React.useEffect(() => {
    console.log(messages);
    socket.on("bmsg", (msg) => setMessages((messages) => messages.concat(msg)));
  }, [socket]);

  const handleMessage = (e) => {
    setMessage(e.currentTarget.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();

    console.log(message);
    if (message !== "") {
      socket.emit("bmsg", {
        user: username,
        message: message,
      });
      setMessage("");
    }
  };




  const toggleModal = () => {
    setShowModal(!showModal)
  }


  return (
    <div className="App">
      <div className='row' style={{backgroundColor: '#293E4A'}}>  
         <div className='container'>
         <Navbar className='navbar-linked' variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/600px-Linkedin.svg.png"
              width="30"
              height="30"
              className="d-inline-block align-top mr-3"
            />
     LinkedIn Chat
    </Navbar.Brand>
        </Navbar>
         </div>
      </div>
           
      <div className='row no-gutters' style={{display: 'flex', justifyContent: 'center', paddingTop: '10px'}}>
      <div className='col col-3' style={{height:'90vh', padding: '5px', margin: '3px', border: '1px solid #CECFD2'}}>
      </div>
  
      <div className='col col-8' style={{ position: 'relative', height:'90vh', margin: '3px', border: '1px solid #CECFD2'}}>
     
   
        <ul id="messages" style={{  height:'93%', listStyle: "none", padding: "40px"}}>
          {messages.map((msg, i) => (
        
       
            <li key={i} style={{display: 'flex', justifyContent:'flex-start', alignItems: 'center', marginTop:'15px'}}>
               <small style={{ backgroundColor : 'blue', padding: '10px 20px', width: '30%', borderRadius: '10px', color: '#000'}}>  {msg.message} </small>
               <strong className='text-muted ml-3'>{msg.user}</strong> 
            </li>

            
          ))}
        </ul>


        <div>
        <form
          id="chat"
          onSubmit={sendMessage}
          style={{
            margin: '0 auto',
            position: 'absolute', 
            bottom: '0',
            width: "100%",
            display: "flex",
            padding: "0.3rem",
            background: "#293E4A"
          }}
        >
          <input
            autoComplete="off"
            value={message}
            onChange={handleMessage}
            style={{ flex: "1 0 auto", outline: 0, paddingLeft: '8px', backgroundColor: 'black'}}
            className="rounded-0 border-0"
          />
          <Button type="send" className="rounded-0 btn-send">
             <FontAwesomeIcon icon={faPaperPlane} />
          </Button>
        </form>
        </div>
        <Modal show={showModal} onHide={toggleModal}>
          <Modal.Header>
            <Modal.Title>Hey, there !</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              {/* <Form.Label>Hey, there !</Form.Label> */}
              <Form.Control type="text" placeholder="Enter your name" onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>
            <Modal.Footer>
              <Button color="primary" className="w-100" onClick={toggleModal}>
                Save
          </Button>
            </Modal.Footer>
          </Modal.Body>
        </Modal>


      
    </div>

      

       


      </div>
    </div>
  );
}

export default App;