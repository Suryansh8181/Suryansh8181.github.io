import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
//import CardGroup from 'react-bootstrap/CardGroup';
import NavigationBar from './NavBar';
import Card from 'react-bootstrap/Card';
//import Caraousel from './caraousel';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Mexican(){
    const token1 = localStorage.getItem("token");
    const [ucity,setucity]=React.useState('')
    //console.log('http://foodobackend.herokuapp.com/home-customer/'+token1.replace(/['"]+/g, ''));
    axios.get('https://foodobackend.herokuapp.com/home-customer/'+token1.replace(/['"]+/g, ''))
    .then(res=>{
        setucity(res.data.address)
    })
    axios.get("https://foodobackend.herokuapp.com/searchResultsbyCuisine/Mexican")
    .then(response=>{
        localStorage.setItem("mexican",JSON.stringify(response.data))
    })
    const usera=localStorage.getItem("mexican");
    const userb=JSON.parse(usera)
    return(
        <>
        <NavigationBar />
        <div style={{ paddingTop: "8%" }}>
        <div style={{ marginLeft: '2rem' }} ><h3>Popular Mexican Restraunts in {ucity}</h3></div>
       <div className='mexican'  style={{display: 'flex',margin:'30px'}}>
        <div className='posts' style={{display: 'flex',margin:'25px'}}>
            {userb.map(post =>{
                return(
                    <>
                    <Card style={{display:"flex",width: '15rem' ,margin:'30px', height: '20rem'}}>
                    <Card.Img variant="top" src="https://b.zmtcdn.com/data/pictures/9/19570539/d7670e70e86ebafdc82b9461eebf854e.jpg?output-format=webp" width='20px' height='100px' />
                    <Card.Body>
                    <h4>{post.name} </h4>
                    <p>{post.owner}</p>
                    <p>{post.phoneno}</p>
                    <p>{post.address}</p>
                    <Link to='/northIndianRestaurantOne'>
                    <Button variant="primary">View Menu</Button></Link>
                    </Card.Body>
                    </Card>
                    </>
                )
            })}
        </div>
    </div>
    </div>  
    </>
)
}

export default Mexican;
