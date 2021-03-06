import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import "../App.css";
import { useFormik } from 'formik';
import * as yup from 'yup';
export default function Signup() {
    let state = {
        email: "",
        password: "",
        phonenumber: "",
        username: "",
        errors: {}
    }

    // handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setState({
    //         [name]: value
    //     })

    // }
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            phonenumber: "",
            password: ""
        },
        validationSchema: yup.object({
            username: yup.string()
                .required('Required'),
            phonenumber: yup.number()
                .min(10, 'Minimum 10 numbers required')
                .required('Required'),
            email: yup.string()
                .email('Invalid email')
                .required('Required'),
            password: yup.string()
                .min(8, 'Minimum 8 numbers required')
                .required('Required')

        }),
        onSubmit: (userInuptData) => {
            console.log(userInuptData)
            let history = useHistory();
            history.push('/signin')
            // axios({
            //     url: 'api/signup',
            //     method: "POST",
            //     data: {
            //         phonenumber: userInuptData.phonenumber,
            //         username: userInuptData.username
            //     },
            //     headers: {
            //         "Authorization": `Basic ${btoa(`${userInuptData.email}:${userInuptData.password}`)}`
            //     }
            // })
            //     .then(response => {
            //         console.log(response)
            //         useHistory.push('/signin')
            //     })
            //     .catch(err => {
            //         console.log(err)
            //         state.errors.msg = err.msg
            //     })
        }
    })


    return (
        <div className="align-items-center container inputWidth">
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label> Name:</label>
                    <input className="form-control"
                        type="text"
                        name="username"
                        onChange={formik.handleChange}
                        value={formik.values.username} />
                </div>
                {formik.errors.username ? <div className="text-danger">{formik.errors.username}</div> : null}
                <div className="form-group">
                    <label> Email:</label>
                    <input className="form-control"
                        type="text"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email} />
                    {formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
                    <div className="form-group">
                    </div>
                    <label> Phone Number:</label>
                    <input className="form-control"
                        type="number"
                        name="phonenumber"
                        onChange={formik.handleChange}
                        value={formik.values.phonenumber} />
                    {formik.errors.phonenumber ? <div className="text-danger">{formik.errors.phonenumber}</div> : null}
                </div>
                <div className="form-group">
                    <label> Password:</label>
                    <input className="form-control"
                        type="password"
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password} />
                    {formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}
                </div>
                <button className="btn btn-primary">Create New</button>
                {state.errors.msg ? <div className="text-danger">{formik.errors.password}</div> : null}
            </form>
        </div>
    )
}
