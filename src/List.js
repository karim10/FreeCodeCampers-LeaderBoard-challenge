import React from 'react';
import axios from 'axios';


const ToggleButton = ({sort, handleClick}) => {
    if (sort === 'recent') {
        return (
            <button onClick={() => handleClick('allTime')}> got allTime </button>
        )
    } else {
        return (
            <button onClick={() => handleClick('recent')}> go to recent </button>
        )
    }
}

class Table extends React.Component {
    imgStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%'
    }

    render() {

        return (
            <div>
                <h1>sorted by {this.props.sort}</h1>
                <ToggleButton { ...this.props }/>

                <table>
                    <tbody>
                        <tr>
                            <td> # </td>
                            <td> Camper Name</td>
                            <td > Recent </td>
                            <td> All Time </td>
                        </tr>

                        {
                            this.props.loading?
                            <tr><td>loading...</td></tr>:
                            this.props.campers.map((camper, index) => {
                                return (
                                <tr key={index}>
                                    <td> { index + 1 } </td>
                                    <td> { camper.username } </td>
                                    <td> { camper.recent } </td>
                                    <td> { camper.alltime } </td>
                                    <td> <img src={camper.img} style= {this.imgStyle} alt={camper.username}/> </td>
                                </tr>
                                )
                            })

                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            campers: [],
            sort: 'recent',
            loading: false
        };
    }

    getData = (sort) => {
        this.setState({loading: true});
        setTimeout(() => {
            let url = `https://fcctop100.herokuapp.com/api/fccusers/top/${sort}`
            const self = this;
            axios.get(url)
              .then(function (response) {
                self.setState({
                    campers: response.data,
                    loading: false,
                    sort: sort
                });
              })
              .catch(function (error) {
                console.log(error);
              });
        }, 0);
    };

    componentDidMount () {
        this.getData(this.state.sort);
    }

    render() {
        return (
            <div>
                <Table campers={this.state.campers} handleClick={this.getData} loading={this.state.loading} sort={this.state.sort}/>
            </div>
        )
    }
}

export default Board;