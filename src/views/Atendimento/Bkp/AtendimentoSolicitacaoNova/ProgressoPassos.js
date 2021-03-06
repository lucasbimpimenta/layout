import React, { Component } from 'react';
import { Col } from 'reactstrap';

class ProgressoPassos extends Component {

    render ()
    {
        const { fase_atual, propriedades, desativaProx } = this.props;

        return(

                <Col xs={12} md={12} className="">
                     <ul className="progress-indicator custom-complex">
                        <li className={(fase_atual > 1) ? "completed" : (fase_atual === 1) ? "active" : "" } onClick={()=>propriedades.goToStep(1)}>
                            <span className="bubble"></span>
                            <i className={(fase_atual > 1) ? "fa fa-check-circle" : (fase_atual === 1) ? "" : "" }></i>&nbsp;
                            Tipo de Solicitação
                        </li>
                        <li className={(fase_atual > 2) ? "completed" : (fase_atual === 2) ? "active" : "" } onClick={(desativaProx && fase_atual < 2)? () => {return null} : ()=>propriedades.goToStep(2)}>
                                <span className="bubble"></span>
                                <i className={(fase_atual > 2) ? "fa fa-check-circle" : (fase_atual === 2) ? "" : "" }></i>&nbsp;
                                Dados Iniciais
                        </li>
                        <li className={(fase_atual > 3) ? "completed" : (fase_atual === 3) ? "active" : "" } onClick={(desativaProx && fase_atual < 3)? () => {return null} : ()=>propriedades.goToStep(2)}>
                            <span className="bubble"></span>
                            <i className={(fase_atual > 3) ? "fa fa-check-circle" : (fase_atual === 3) ? "" : "" }></i>&nbsp;
                            Finalizar solicitação
                        </li>
                    </ul>
                </Col>
        );
    }
}

export default ProgressoPassos;