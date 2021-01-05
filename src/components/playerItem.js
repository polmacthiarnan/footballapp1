import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom'
export class PlayerItem extends React.Component {

    constructor() {
        super();
        this.DeletePlayer = this.DeletePlayer.bind(this);
    }

    DeletePlayer(e) {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/players/' + this.props.player._id)
            .then(() => {
                this.props.ReloadData();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Header style={{ color: 'blue', fontWeight: 'bold' }}>{this.props.player.Name} </Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.player.Poster} alt="poster" width="300" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.player.Age}<br />
                                {this.props.player.Team}

                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/edit/" + this.props.player._id} className="btn btn-warning">Edit</Link>
                    <Button variant="danger" onClick={this.DeletePlayer}>Delete</Button>  
                </Card>
            </div>
        );  
    }
}