import React, { Component } from 'react';
import axios from 'axios';
export default class Dashboard extends Component {
    componentDidMount() {
        axios({
            url: '/api/validation',
            method: "GET"
        })
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                this.props.history.push('/signin');
            })

    }
    render() {
        return (
            <div>welcome from Dashboard</div>
        )
    }
}