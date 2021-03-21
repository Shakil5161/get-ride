import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import People from '../Img/peopleicon.png'
const Destination = (props) => {
    const item = useParams();
    const rideInfo = props.rideInfo;
    const multiWay = rideInfo.filter(ride => ride.catagory === item.item);
    console.log("destination multiWay", multiWay);
    const [search, setSearch] = useState(false);
    const [pick, setPick] = useState({})
    const handleBlur = (e) => {
        console.log(e.target.name, e.target.value);
        if(e.target.name === 'pickFrom'){
            const newPick = {...pick};
            newPick.pickFrom = e.target.value;
            setPick(newPick);
        }
        if(e.target.name === 'pickTo'){
            const newPick = {...pick};
            newPick.pickTo = e.target.value;
            setPick(newPick);
        }
    }
    return (
        <div className="container d-flex mt-5">
            <div className="col-sm-4">
                <Card style={{backgroundColor: "#EFEFEF", borderRadius:"10px"}}>
                    <Card.Body>
                        {
                            !search && <form action="">
                                <input className="form-control" type="text" name="pickFrom" onBlur={handleBlur} placeholder="Pick From" required/>
                                <br />
                                <input className="form-control" type="text" name="pickTo" onBlur={handleBlur} placeholder="Pick To" required/>
                                <br />
                                <Button type="submit" onClick={() => setSearch(!search)} style={{color:'black'}} variant="outline-warning">Login</Button>
                            </form>
                        }

                        {
                            search &&
                            <div>
                                <div className="card" style={{backgroundColor:"#FF6E40", color:"white",borderRadius:"10px"}}>
                                    <div className="card-body" >
                                        <h4 className="card-title m-0 pt-2 pb-2">{pick.pickFrom}</h4>
                                        <span>to</span>
                                        <h4 className="card-title m-0 pt-2 pb-2">{pick.pickTo}</h4>
                                    </div>
                                </div>
                                {
                                    multiWay.map( way => <div key={way.id} className="card mb-3" style={{borderRadius: "10px"}}>
                                    <div className="row g-0" >
                                        <div className="col-md-4 text-center">
                                            <img height="50px"  src={way.catagoryMiniImg} alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body d-flex justify-content-center p-3">
                                                <h5 className="card-title pr-3">{way.catagory}</h5>
                                                <img height="25px" src={People} alt="" srcSet="" />
                                                <h5 className="card-title pr-3">{way.person}</h5>
                                                <h5 className="card-title">${way.rent}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                                }
                            </div>
                        }
                    </Card.Body>
                </Card>
            </div>
            <div className="col-sm-8"><iframe title="Get Ride Search Location" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29199.92106102865!2d90.38611378465575!3d23.818949918249125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1616234083804!5m2!1sen!2sbd" style={{ borderRadius: "10px", width: "100%", height: "580px", border: '0', allowfullscreen: "", loading: "lazy", }}></iframe></div>
        </div>
    );
};

export default Destination;