import React from 'react';
import { PlayerItem } from './playerItem';

export class Players extends React.Component {

    render() {
        return this.props.players.map((player) => {
            return <PlayerItem player={player} ReloadData={this.props.ReloadData}></PlayerItem>
        })
    }
}