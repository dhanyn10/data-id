import React from 'react';
import {
    Row,
    Col,
    CardHeader,
    CardBody
} from 'reactstrap';
import './css/sidebar.css';

class Sidebar extends React.Component
{
    render()
    {
        return(
            <Col sm="3">
                <Row>
                    <div className="card w-100 rounded-0" id="sidebar">
                        <CardHeader>Menu</CardHeader>
                        <CardBody>Item Menu</CardBody>
                    </div>
                </Row>
            </Col>
        );
    }
}

export default Sidebar;