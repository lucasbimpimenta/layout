import React, { Component } from 'react';
import { Row, Col, Form, Button, Label, FormGroup } from 'reactstrap';

import Atividade from '../Comuns/Atividade';

class AtendimentoSolicitacaoNova extends Component {

    constructor(props) 
    {
        super(props);

        this.setTipoSolicitacao = this.setTipoSolicitacao.bind(this);

        this.state = {
            dados_iniciais: null,
            gravado: false
        }

        this.tipo_selecionado = null;
    }

    setTipoSolicitacao(tipo_selecionado) 
    {
        this.tipo_selecionado = tipo_selecionado;
        console.log("Componente Atendimento",this.tipo_selecionado);
    }

    render() {

        console.log("tipo_selecionado ", !this.tipo_selecionado);
        return (
            <div>
                <Row>
                    <h4 className="titulo">Nova Solicitação</h4>
                </Row>
                <Row>
                    <Col xs={12} md={12} className="">
                        <Form>
                            <FormGroup row>
                                <Label className="label-caixa-form" sm={1} for="exampleSelectMulti">Categoria:</Label>
                                <Col sm={11}>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label className="label-caixa-form" sm={1} for="exampleSelectMulti">Tipo:</Label>
                                <Col sm={11}>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label className="label-caixa-form" sm={1} for="exampleSelectMulti">Atividade:</Label>
                                <Col sm={11}>
                                    <Atividade onChange={this.setTipoSolicitacao} somente_leitura={false}/>
                                </Col>
                            </FormGroup>
                            <div className="clearfix" style={{ padding: '.5rem' }}>
                                <Button className="float-right" disabled={!this.tipo_selecionado} color="primary" size="sm" >Solicitar</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AtendimentoSolicitacaoNova;