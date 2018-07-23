import React, { Component } from 'react';
import { Row, Col, Nav, NavItem, NavLink, Badge } from 'reactstrap';

class AtendimentoSolicitacaoNova extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Row>
                    <h4 class="titulo">Nova Solicitação</h4>
                </Row>
                <Row>
                    <Col sm="12">
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AtendimentoSolicitacaoNova;