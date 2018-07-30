import React, { Component } from 'react';
import { Col, Label, FormGroup } from 'reactstrap';

import Atividade from '../Comuns/Atividade';

class TipoSolicitacao extends Component {    

    render() {

        console.log("this.props.atividade_sel", this.props.atividade_sel);
        return(
                <div>
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
                            <Atividade onChange={this.props.onChange} somente_leitura={false}/>
                        </Col>
                    </FormGroup>
                </div>
        );
    }
}

export default TipoSolicitacao;