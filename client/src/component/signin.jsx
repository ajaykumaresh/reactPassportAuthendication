import React, { Component } from 'react';
import axios from 'axios';
import "../App.css";
import { Link } from 'react-router-dom';
export default class Signin extends Component {
    state = {
        email: "",
        password: "",
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        const username = email;
        axios({
            url: 'api/signin',
            method: "POST",
            data: {
                username
            },
            headers: {
                "Authorization": `Basic ${btoa(`${email}:${password}`)}`
            }
        })
            .then(response => {
                console.log(response)
                this.props.history.push('/a/dashboard');
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (

            <div className="align-items-center container inputWidth">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label> Email:</label>
                        <input className="form-control" type="text" name="email" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label> Password:</label>
                        <input className="form-control" type="password" name="password" onChange={this.handleChange} />
                    </div>
                    <button className="btn btn-primary">Signin</button>
                    <span className="hyperLink"><Link to="/signup">new user</Link></span>
                </form>
            </div>


        )
    }
}