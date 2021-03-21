import React from 'react';
import './Home.css'
import { Card, CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Home = (props) => {
    const rideInfo = props.rideInfo;
    console.log(rideInfo);
    const mainRide = rideInfo?.filter(ride => ride.display === "home");
    return (
        <div style={{ backgroundColor:"#EFEFEF"}} className="container-fluid">
            <div className="container m-auto">
                <CardDeck style={{ padding: '250px 0px' }}>
                    {
                        mainRide?.map(ride => <Card key={ride.id} style={{ borderRadius: "10px"}}><Link to={"/destination/"+ride.catagory}>
                            <Card.Img className="p-2" variant="top" src={ride.catagoryImgMain} />
                            <Card.Body className="p-0 ">
                                <Card.Title className="text-center">{ride.catagory}</Card.Title>
                            </Card.Body></Link>
                        </Card>)
                    }
                </CardDeck>
            </div>
        </div>
    );
};

export default Home;