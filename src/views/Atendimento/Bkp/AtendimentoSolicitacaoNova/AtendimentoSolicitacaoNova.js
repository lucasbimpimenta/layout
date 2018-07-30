import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import {StepWizard, Step} from 'react-step-wizard';

import TipoSolicitacao from './TipoSolicitacao';
import Finalizacao from './Finalizacao';
import DadosIniciais from './DadosIniciais';

let animacoes_wizard = {
  enterRight: 'fadeIn',
  enterLeft : 'fadeInn',
  exitRight : 'fadeOut',
  exitLeft  : 'fadeOut'
}

class AtendimentoSolicitacaoNova extends Component {

    constructor(props) 
    {
        super(props);

        this.setTipoSolicitacao = this.setTipoSolicitacao.bind(this);

        this.state = {
            dados_iniciais: null,
            gravado: false,
            tipo_selecionado: null
        }
    }

    setTipoSolicitacao(tipo_selecionado) {
        this.setState({tipo_selecionado});
        console.log("Componente Atendimento",this.state.tipo_selecionado);
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
                            <Step><TipoSolicitacao onChange={this.setTipoSolicitacao} atividade_sel={this.state.tipo_selecionado}/></Step>
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