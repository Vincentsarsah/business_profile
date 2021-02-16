import React from 'react'
import {Button} from 'react-bootstrap'
import Card from "react-bootstrap/Card"
import 'bootstrap/dist/css/bootstrap.min.css'
import Iphone from '../Pictures/phones/iphone.jpg'
import S9 from '../Pictures/phones/S9.png'
import Nokia5 from '../Pictures/phones/Nokia5.jpg'
import NoteEdge from '../Pictures/phones/note-edge.jpg'
import '../Css/Style.css'

function Phone1() {
    return (
    <div className = 'container_phones'>
    
        <div className = "phone_items">   
              <Card style={{ width: '14rem'}}>
              <img src={Iphone} alt='iphone'/>
                  <Card.Body >
                    <Card.Title >iPhone 11</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
            </div>
       
          <div className = "phone_items">   
            <Card style={{ width: '14rem' }}>
            <img src={S9} alt='iphone'/>
                <Card.Body>
                  <Card.Title>Samsung S9</Card.Title>
                  <Card.Text>
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Card>
          </div>

          <div className = "phone_items">   
            <Card style={{ width: '14rem' }}>
            <img src={Nokia5} alt='iphone'/>
                <Card.Body>
                  <Card.Title>Nokia 5.0</Card.Title>
                  <Card.Text>
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Card>
          </div>

          <div className = "phone_items">   
            <Card style={{ width: '14rem' }}>
            <img src={NoteEdge} alt='iphone'/>
                <Card.Body>
                  <Card.Title>Samsung Note Edge</Card.Title>
                  <Card.Text>
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
          </div>

          <div className = "phone_items">   
            <Card style={{ width: '14rem' }}>
            <img src={Iphone} alt='iphone'/>
                <Card.Body >
                  <Card.Title >Card Title</Card.Title>
                  <Card.Text>
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
          </div>

          <div className = "phone_items">   
            <Card style={{ width: '14rem' }}>
            <img src={Iphone} alt='iphone'/>
                <Card.Body >
                  <Card.Title >Card Title</Card.Title>
                  <Card.Text>
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
          </div>

          <div className = "phone_items">   
            <Card style={{ width: '14rem' }}>
            <img src={Iphone} alt='iphone'/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
          </div>

          <div className = "phone_items" >   
            <Card style={{ width: '14rem' }} >
            <img src={Iphone} alt='iphone'/>
                <Card.Body >
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
          </div>
    </div>
        
    )  
  }

  export default Phone1