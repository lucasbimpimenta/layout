import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import {StepWizard, Step} from 'react-step-wizard';
import StepZilla from 'react-stepzilla';

import Categorias from './Categorias';
import Finalizacao from './Finalizacao';
import DadosIniciais from './DadosIniciais';

let animacoes_wizard = {
  enterRight: 'fadeIn',
  enterLeft : 'fadeIn',
  exitRight : 'fadeOut',
  exitLeft  : 'fadeOut'
}

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
                        <StepWizard transitions={animacoes_wizard} >
                            <Step><Categorias/></Step>
                            <Step><DadosIniciais/></Step>
                            <Step><Finalizacao/></Step>
                        </StepWizard>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AtendimentoSolicitacaoNova;