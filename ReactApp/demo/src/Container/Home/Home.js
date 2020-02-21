import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Table, Button } from 'reactstrap';

import * as ActionTheater from '../../Action/ActionTheater/ActionTheater'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rdb: '',
            flag: true
        }
    }
    componentDidMount() {
        this.props.action.data.TheaterShow();
    }
    getData = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onView = () => {
        this.props.history.push({ pathname: '/movie', state: { ID: this.state.rdb } })
    }
    render() {
        var data = this.props.Theater.result;

        return (
            data ? (
                <div>
                    <center>
                        <h2>Home Page</h2>
                        <Table style={{ width: '200px' }}>
                            <thead>
                                <tr>
                                    <th>Theater Name</th>
                                </tr>
                            </thead>{
                                data.map(result => {
                                    return (
                                        <div>
                                            <tbody>
                                                <tr>
                                                    <td> <input type="radio" onChange={this.getData} name="rdb" value={result._id}></input> </td>
                                                    <td> {result.name}</td>
                                                </tr>
                                            </tbody>
                                        </div>
                                    )
                                })
                            }
                        </Table>
                        <Button onClick={this.onView}>View</Button>
                    </center>
                </div>
            ) : ""
        )
    }
}

const mapStatetoProps = (state) => {
    const { Theater } = state
    return {
        Theater
    }
}

const mapDispatchToProps = dispatch => ({
    action: {
        data: bindActionCreators(ActionTheater, dispatch)
    }
})
export default connect(mapStatetoProps, mapDispatchToProps)(Home)
