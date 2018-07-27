import React, { Component } from 'react';
import { Label, Row, Form } from 'reactstrap';

import ProgressoPassos from './ProgressoPassos';

class DadosIniciais extends Component {
    render() {
        return(
            <Form>
                <Row>
                    <ProgressoPassos fase_atual={2} propriedades={this.props}/>
                </Row>
                <Label className="label-caixa-form" sm={2} for="exampleSelectMulti">Dados Iniciais:</Label>
            </Form>
        );
    }
}

export default DadosIniciais;