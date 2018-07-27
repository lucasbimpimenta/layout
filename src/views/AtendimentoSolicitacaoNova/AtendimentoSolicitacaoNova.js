import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import {StepWizard, Step} from 'react-step-wizard';

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

        this.setTipoSolicitacao = this.setTipoSolicitacao.bind(this);

        this.state = {
            tipo_selecionado: null,
            dados_iniciais: null,
            gravado: false
        }
    }

    setTipoSolicitacao(tipo_selecionado) {
        this.setState({ tipo_selecionado });
        console.log(this.state.tipo_selecionado);
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
                            <Step><Categorias onChange={this.setTipoSolicitacao}/></Step>
                            <Step><DadosIniciais matriz={this}/></Step>
                            <Step><Finalizacao matriz={this}/></Step>
                        </StepWizard>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AtendimentoSolicitacaoNova;