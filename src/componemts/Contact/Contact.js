import React from 'react';
import { Card } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="container d-flex mt-4">
            <div className="col-sm-4">
                <Card >
                    <Card.Body>
                        <form action="">
                            <input type="text" name="" placeholder="Pick From" id=""/>
                            <br/>
                            <input type="text" name="" placeholder="Pick To" id=""/>
                            <br/>
                            <button type="button">Search</button>
                        </form>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-sm-8"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29199.92106102865!2d90.38611378465575!3d23.818949918249125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1616234083804!5m2!1sen!2sbd" style={{borderRadius:"10px", width:"100%",height:"580px", border:'0', allowfullscreen:"", loading:"lazy",}}></iframe></div>
        </div>
    );
};

export default Contact;