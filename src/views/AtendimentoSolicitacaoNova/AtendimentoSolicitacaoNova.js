import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import {StepWizard, Step} from 'react-step-wizard';

import Categorias from './Categorias';

class AtendimentoSolicitacaoNova extends Component {

    constructor(props) 
    {
        super(props);
    }

    render() {

        return (
            <div>
                <Row>
                    <h4 className="titulo">Nova Solicitação</h4>
                </Row>
                <Row>
                    <Col xs={12} md={12} className="">
                        <StepWizard>
                            <Step><Categorias/></Step>
                            <Step><Categorias/></Step>
                        </StepWizard>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AtendimentoSolicitacaoNova;