import React, { Component } from 'react';
import { Col, Button, Form, Label, FormGroup, Row } from 'reactstrap';

import ProgressoPassos from './ProgressoPassos';

class DadosIniciais extends Component {
    constructor(props) {
        super(props);

        this.state = {
            atividade_sel: null
            ,dados_preenchidos: false
        }

    }

    render() {
        return(
            <Form>
                <Row>
                    <ProgressoPassos fase_atual={2} propriedades={this.props} desativaProx={(this.state.dados_preenchidos) ? true : false}/>
                </Row>
                <Row>
                    <Label className="label-caixa-form" sm={2} for="exampleSelectMulti">Categoria:</Label>
                    <Col sm={10}></Col>
                </Row>
                <FormGroup row>
                    <Label className="label-caixa-form" sm={2} for="exampleSelectMulti">O.S.:</Label>
                    <Col sm={10}>

                    </Col>
                </FormGroup>
                
                
                <div className="clearfix" style={{ padding: '.5rem' }}>
                    <Button className="float-left" outline disabled={false} color="primary" size="sm" onClick={this.props.previousStep} >Retornar</Button>
                    <Button className="float-right" disabled={(this.state.dados_preenchidos) ? false : true} color="primary" size="sm" onClick={this.props.nextStep} >Avançar</Button>
                </div>
            </Form>
        );
    }
}

export default DadosIniciais;