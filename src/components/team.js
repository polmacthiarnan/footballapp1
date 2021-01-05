import React from 'react';
import { Players } from './players';
import axios from 'axios';


export class Team extends React.Component {

    constructor() {
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        players: []
    };

    ReloadData() {
        axios.get('http://localhost:4000/api/players')
            .then((response) => {
                this.setState({ players: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/players')
            .then((response) => {
                this.setState({ players: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <div>
                <h1>Make changes to your team here</h1>
                <Players players={this.state.players} ReloadData={this.ReloadData}></Players>

            </div>

        );
    }
}

