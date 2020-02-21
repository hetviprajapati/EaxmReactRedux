import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Table, Button } from 'reactstrap';

import * as ActionMovie from '../../Action/ActionMovie/ActionMovie'
class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rdbid: '',
            date: ''
        }
    }
    componentDidMount() {
        this.props.action.data.TheaterMovie(this.props.location.state.ID);
    }
    GetData = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onView = () => {
        var name;
        this.props.Movie.result.map(res => {
            if (res._id === this.state.rdbid)
                name = res.moviename;
            return null
        })
        this.props.history.push({ pathname: '/ticket', state: { Data: this.state, mname: name } })
    }
    render() {
        console.log(this.state);
        var data = this.props.Movie.result;
        return (
            data ? (
                <div>
                    <center>
                        <h2>Theater Movie List</h2>
                        <Table style={{ width: '200px' }}>
                            <thead>
                                <tr>
                                    <th>Movie Name</th>
                                </tr>
                            </thead>{
                                data.map(result => {
                                    return (
                                        <div>
                                            <tbody>
                                                <tr>
                                                    <td> <input type="radio" name="rdbid" value={result._id} onChange={this.GetData}></input> </td>
                                                    <td> {result.moviename}
                                                        <select name="date" onChange={this.GetData}>
                                                            <option>--select--</option>
                                                            {
                                                                result.date.map(res => {
                                                                    return (
                                                                        <option>{res}</option>)
                                                                })
                                                            }
                                                        </select>

                                                    </td>
                                                </tr>
                                            </tbody>
                                        </div>
                                    )
                                })
                            }
                        </Table>
                        <Button onClick={this.onView}>View</Button>
                    </center>
                </div>) : ""
        )
    }
}
const mapStatetoProps = (state) => {
    const { Movie } = state
    return {
        Movie
    }
}

const mapDispatchToProps = dispatch => ({
    action: {
        data: bindActionCreators(ActionMovie, dispatch)
    }
})
export default connect(mapStatetoProps, mapDispatchToProps)(Movie)
