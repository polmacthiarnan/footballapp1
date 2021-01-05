import React from 'react';
import { } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; // imports bootstrap card


export class Tops extends React.Component {

    render() {
        return (
    <div> 
<Jumbotron>
  <h1>2020 Stars</h1>
  <p>
   Below are some of the best performing players in 2020
  </p>

</Jumbotron>



<Card style={{ width: '24 rem' }}>
  <Card.Img variant="top" src="https://media.gettyimages.com/photos/harry-kane-of-tottenham-hotspur-celebrates-
  after-scoring-his-teams-picture-id1190253581?s=2048x2048" />
  <Card.Body>
    <Card.Title>Harry Kane</Card.Title>
    <Card.Text>
    Kane scored a goal and recorded an assist in Saturday's 3-0 victory against Leeds United. He also made two clearances and he took six shots (two on target) overall in the match.
    </Card.Text>
   
    <Button variant="dark" href="/pick">Pick</Button>
  </Card.Body>
</Card>
<br />

<Card style={{ width: '24 rem' }}>
  <Card.Img variant="top" src="https://media.gettyimages.com/photos/bruno-fernandes-of-manchester-united-celebrates-after-scoring-their-picture-id1293172886?s=2048x2048" />
  <Card.Body>
    <Card.Title>Bruno Fernandes</Card.Title>
    <Card.Text>
    Fernandes has played more games than the Belgium midfielder but has a goal involvement every 75 minutes compared to 100 minutes for De Bruyne.
    </Card.Text>
    <Button variant="dark" href="/pick">Pick</Button>
  </Card.Body>
</Card>
<br />

<Card style={{ width: '24 rem' }}>
  <Card.Img variant="top" src="https://media.gettyimages.com/photos/tammy-abraham-of-chelsea-celebrates-after-scoring-his-teams-second-picture-id1171331650?s=2048x2048" />
  <Card.Body>
    <Card.Title>Tammy Abraham</Card.Title>
    <Card.Text>
    On 23 September 2020, Abraham played as a starter for the first time in 2020–21 season and scored his first goal of the season against Barnsley in the third round of the EFL Cup, which ended in a 6–0 win.
    </Card.Text>
    <Button variant="dark" href="/pick">Pick</Button>
  </Card.Body>
</Card>
<br />
<Card style={{ width: '24 rem' }}>
  <Card.Img variant="top" src="https://media.gettyimages.com/photos/dominic-calvertlewin-of-everton-celebrates-after-scoring-his-teams-picture-id1192479899?s=2048x2048" />
  <Card.Body>
    <Card.Title>Dominic-Calvin Lewin</Card.Title>
    <Card.Text>
    On 13 September 2020, he started the 2020–21 season by scoring the winning goal with a header in a 1–0 win over Tottenham Hotspur, followed by his first Premier League hat-trick in a 5–2 victory over West Bromwich Albion. On 30 September, he scored a hat-trick in a 4–1 win against West Ham United in the EFL Cup. That made Calvert-Lewin the first Everton player to score two hat-tricks in one month since Dixie Dean in November 1931.
    </Card.Text>
    <Button variant="dark" href="/pick">Pick</Button>
  </Card.Body> 
</Card>
<br />

<Card style={{ width: '24 rem' }}>
  <Card.Img variant="top" src="https://media.gettyimages.com/photos/sadio-mane-of-liverpool-celebrates-after-scoring-his-teams-second-picture-id1210955243?s=2048x2048" />
  <Card.Body>
    <Card.Title>Sadio Mane</Card.Title>
    <Card.Text>
    Sadio Mané (born 10 April 1992) is a Senegalese professional footballer who plays as a winger for Premier League club Liverpool and the Senegal national team. Regarded as one of the best players in the world, Mané finished fourth for the 2019 Ballon d'Or, and in the award for the Best FIFA Men's Player he ranked fifth in 2019 and fourth in 2020
    </Card.Text>
    <Button variant="dark" href="/pick">Pick</Button>
  </Card.Body>
</Card>
</div>
        );
           
    }
    }