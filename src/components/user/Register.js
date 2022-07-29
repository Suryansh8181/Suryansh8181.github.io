import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import NavigationBar from '../InitialNavBar';
import Signimg from './Sign_img'
function Register() {
    const [user, setUser] = useState({ userID: "", name: "", email: "", password: "", Phone: "", Address: "", Role: "" })
    const [msg, setMsg] = useState('');
    const history = useNavigate();
    useEffect(() => {
        //console.log("register rendered");
        if (msg.includes("Success")) {

        }
    }, [msg, history])

    const changeMe = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user, [name]: value
        })
    }
    const success = { padding: "10px 15px", border: "1px solid green", color: "green" }
    const fail = { padding: "10px 15px", border: "1px solid red", color: "red" }
    const registerMe = (e) => {

        e.preventDefault();
        //api post to server
        axios.post('https://my-json-yumito-server.herokuapp.com/users', user)
            .then(res => {
                setMsg("Registered Successfully");
                console.log(user);
                history("/login")
                //redirect to login page
            })
            .catch((e) => {
                setMsg("Something went wrong. Please try again later");
            })
    }
    return (
        <>
            <NavigationBar />
            <div className="container" style={{paddingTop:"6%"}}>
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <form className="form1" onSubmit={registerMe}>
                            <h2>Register Form</h2><br />
                            <div className="mb-3 col-lg-6">
                            <div className="d-flex flex-column g-2">
                                <div className="form-group">
                                    <div className="form-group">
                                        <div className="form-group">
                                            <label htmlFor="userID" className="form-label m-2 h5">UserID</label>
                                            <input type="text" name="userID" placeholder="userID" className="form-control-lg" value={user.userID} onChange={changeMe} required /></div>
                                        <label htmlFor="name" className="form-label m-2 h5">Name</label>
                                        <input type="name" name="name" placeholder="Name" className="form-control-lg" value={user.name} onChange={changeMe} required /></div>
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label m-2 h5">Email</label>
                                        <input type="email" name="mail" placeholder="Email" className="form-control-lg" value={user.mail} onChange={changeMe} required /></div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="form-label m-2 h5">Password</label>
                                        <input type="password" name="password" placeholder="Password" className="form-control-lg" value={user.password} onChange={changeMe} required /></div>
                                    <div className="form-group">
                                        <label htmlFor="Phone" className="form-label m-2 h5">Phone</label>
                                        <input type="number" name="Phone" placeholder="Phone" className="form-control-lg" value={user.Phone} onChange={changeMe} required /></div>
                                    <div className="form-group">
                                    <label htmlFor="Address" className="form-label m-2 h5">Address</label>
                                    <textarea type="text" name="Address" placeholder="Address" className="form-control-lg" value={user.Address} onChange={changeMe} required /></div></div>
                                <div className="form-group">
                                    <label htmlFor="Role" className="form-label m-2 h5">Role</label>
                                    <input type="text" name="Role" placeholder="Role" className="form-control-lg" value={user.Role} onChange={changeMe} required /></div>
                                    </div>
                                <button className="btn btn-primary my-3 h4">Sign Up</button>
                                <div className="h5 text-center" style={msg === '' ? {} : (msg.includes("Success") ? success : fail)}>{msg}</div>
                                </div>
                                <hr />
                                <h3><span>Already have an account?  |  <Link to="/login">Sign in</Link></span> </h3>
                            

                        </form>
                    </div>
                    <div className="left_data mt-5 p-6" style={{ width: "50%" }}>
                        <Signimg/>
                    </div>
                </section>
            </div>
        </>
    )
}

export default React.memo(Register)