import React from 'react';
import axios from 'axios';

export class Edit extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeTeam = this.onChangeTeam.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this); //detects value of input changes

        this.state = {
            Name: '',
            Age: '',
            Team: '',
            Poster: ''
        }
    }
    componentDidMount() {
        console.log(this.props.match.params.id)

        axios.get('http://localhost:4000/api/players/' + this.props.match.params.id)
            .then(response => {
                this.setState({ //updates component
                    _id: response.data._id,
                    Name: response.data.name,
                    Age: response.data.age,
                    Team: response.data.team,
                    Poster: response.data.poster
                });
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }

    onChangeAge(e) {
        this.setState({
            Age: e.target.value
        });
    }
    onChangeTeam(e) {
        this.setState({
            Team: e.target.value
        })
    }
    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        alert("Player: " + this.state.Name + " "
            + this.state.Age + " "
            + this.state.Team + " " +
            this.state.Poster);

        const newPlayer = { //dentifier can't be reassigned
            Name: this.state.Name,
            Age: this.state.Age,
            Team: this.state.Team,
            Poster: this.state.Poster,
            _id: this.state._id,
        };
        axios.put('http://localhost:4000/api/players/' + this.state._id, newPlayer)
            .then(res => console.log(res.data));
        //axios.post('http://localhost:4000/api/players', newPlayer)
        // .then(response => console.log(response.data))
        // .catch(error => console.log(error));    

    }

    render() {
        return (
            <div style={{
                backgroundImage: `url("https://images.pexels.com/photos/3571065/pexels-photo-3571065.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`

            }}>
                <div className='App'>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Add Player Name: </label>
                            <input type='text'
                                className='form-control'
                                value={this.state.Name}
                                placeholder="Enter Player Name"
                                onChange={this.onChangeName}></input>
                        </div>
                        <div className="form-group">
                            <label>Add Player Age: </label>
                            <input type='text'
                                className='form-control'
                                value={this.state.Age}
                                placeholder="Enter Player Age"
                                onChange={this.onChangeAge}></input>
                        </div>
                        <div className='form-group'>
                            <label>Player Team: </label>
                            <textarea type='text'
                                className='form-control'
                                value={this.state.Team}
                                placeholder="Enter Player Team"
                                onChange={this.onChangeTeam}>
                            </textarea>
                        </div>
                        <div className='form-group'>
                            <label>Player Poster: </label>
                            <textarea type='text'
                                className='form-control'
                                value={this.state.Poster}
                                placeholder="Enter Player Poster"
                                onChange={this.onChangePoster}>
                            </textarea>
                        </div>




                        <div className="form-group">
                            <input type='submit'
                                value='Add Player'
                                className='btn btn-dark'></input>
                        </div>
                    </form>
                    <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />
                </div>
            </div>

        );
    }
}