import React, { Component } from 'react';
import { Col, Button, Form, Label, FormGroup, Row } from 'reactstrap';

import ProgressoPassos from './ProgressoPassos';
import Atividade from '../Comuns/Atividade';

class TipoSolicitacao extends Component {    
    state = { atividade_sel: null }

    setAtividade = (atividade_sel) => {
        this.setState({ atividade_sel });
    }

    render() {
        return(
            <Form>
                <Row>
                    <ProgressoPassos fase_atual={1} propriedades={this.props} desativaProx={(this.state.atividade_sel) ? false : true}/>
                 </Row>
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
                        <Atividade onChange={this.setAtividade} somente_leitura={false}/>
                    </Col>
                </FormGroup>
                <div className="clearfix" style={{ padding: '.5rem' }}>
                    <Button className="float-right" disabled={!!this.state.atividade_sel} color="primary" size="sm" onClick={this.props.nextStep} >Avançar</Button>
                </div>
            </Form>
        );
    }
}

export default TipoSolicitacao;