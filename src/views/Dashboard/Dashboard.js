import React, { Component } from 'react';
import { Container, Row, Col, Nav } from 'reactstrap';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Row>
                <Nav vertical md="2">
                    <div class="sidebar-sticky">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">
                                <span data-feather="home"></span>
                                Dashboard <span class="sr-only">(current)</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </Nav>
            </Row>
        )
    }
}

export default Dashboard;