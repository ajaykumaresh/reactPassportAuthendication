import React, { Component } from 'react';
import axios from 'axios';
export default class Profile extends Component {
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
            <div>welcome from profile</div>
        )
    }
}