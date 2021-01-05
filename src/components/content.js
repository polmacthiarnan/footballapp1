import React from 'react';
import {  Carousel, Table } from 'react-bootstrap';

import messi from './messi.jpg';
import ron from './ron.jpeg';
import salah from './salah.jpg';

export class Content extends React.Component {

    render() {
        return (
          <div>
            <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                img src={messi} 
                alt="First slide"
                height = "700px"
                width = "600px"
              
              />
     
              <Carousel.Caption>
              <h3>Fantasy World X1</h3>
                <p>Pick your  best XI players in the world right now</p>
              
              </Carousel.Caption>
              
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ron}
                alt="Second slide"
                height = "700px"
                width = "600px"
              />
          
              <Carousel.Caption>
              <h3>Add and delete players Weeky</h3>
                <p>If players are having a bad week you can always replace them</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={salah}
                alt="Second slide"
              />
          
              <Carousel.Caption>
              <h3>Compare with friends</h3>
                <p>Show your team off to your mates</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <br />

         <h3>Premier League Highlights 2020</h3>
          <div className="embed-responsive embed-responsive-16by9">
      <iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/t3mTZbaTods" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div>
    <br />
    <h3>Top 5 Players of 2020</h3><br />
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Robert </td>
      <td>Lewandowski</td>
     
    </tr>
    <tr>
      <td>2</td>
      <td>Christiano</td>
      <td>Ronaldo</td>
     
    </tr>
    <tr>
      <td>3</td>
      <td>Lionel</td>
      <td>Mesii</td>
     
    </tr>
    <tr>
      <td>4</td>
      <td>Neymar</td>
      <td>JR</td>
     
    </tr>
    <tr>
      <td>5</td>
      <td>Karim</td>
      <td>Benzema</td>
     
    </tr>
  </tbody>
</Table>
         </div> 
        );
    }
}