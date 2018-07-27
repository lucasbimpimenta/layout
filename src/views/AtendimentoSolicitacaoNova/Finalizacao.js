import React, { Component } from 'react';
import { Label, Row, Form } from 'reactstrap';

import ProgressoPassos from './ProgressoPassos';

class Finalizacao extends Component {
    render() {
        return(
            <Form>
                <Row>
                    <ProgressoPassos fase_atual={3} propriedades={this.props}/>
                </Row>
                <Label className="label-caixa-form" sm={2} for="exampleSelectMulti">Finalização:</Label>
            </Form>
        );
    }
}

export default Finalizacao;