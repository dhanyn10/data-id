import React from 'react';
import {
    BrowserRouter
} from 'react-router-dom';
import {
    Container,
    Row
} from 'reactstrap';
import Sidebar from './Sidebar.jsx';
import Main from './Main.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component
{
    render()
    {
        return(
            <BrowserRouter>
                <div>
                    <Container fluid={true}>
                        <Row>
                            <Sidebar/>
                            <Main/>
                        </Row>
                    </Container>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;