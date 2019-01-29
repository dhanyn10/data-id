import React from 'react';
import {
    Row,
    Col,
    CardBody
} from 'reactstrap';

class Main extends React.Component
{
    render()
    {
        return(
            <Col md="9">
                <Row>
                    <div className="card w-100 rounded-0" id="main">
                        <CardBody>Item Menu</CardBody>
                    </div>
                </Row>
            </Col>
        );
    }
}

export default Main;