import React from 'react';
import {
    Row,
    Col,
    CardHeader,
    CardBody
} from 'reactstrap';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './css/main.css';

class Main extends React.Component
{
    componentDidMount()
    {
        this.mapindonesia = L.map('map-indo').setView([-3.357493,117.5171464], 5);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiZGhhbnludXJkaWFuc3lhaCIsImEiOiJjanJodnV4cXExaXF5NDNvZ2ttcmRla2h0In0.MQl4sbMPMCwXVNoVmledHw'
        }).addTo(this.mapindonesia);
    }
    render()
    {
        return(
            <Col sm="9">
                <Row>
                    <div className="card w-100 rounded-0" id="main">
                        <CardHeader>Maps</CardHeader>
                        <CardBody>
                            <div id="map-indo"></div>
                        </CardBody>
                    </div>
                </Row>
            </Col>
        );
    }
}

export default Main;