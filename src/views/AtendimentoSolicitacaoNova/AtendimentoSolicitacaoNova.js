import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import Categorias from './Categorias';

class AtendimentoSolicitacaoWizard extends Component {
    constructor(props) 
    {
        super(props);

        this.state = 
        {
            step: 1
        };
    }

    render() 
    {
		switch (this.state.step) 
        {
			case 1:
				return <Categorias />
			case 2:
				return <Categorias />
			case 3:
				return <Categorias />
			case 4:
				return <Categorias />
		}
	}
}


class AtendimentoSolicitacaoNova extends Component {

    constructor(props) 
    {
        super(props);

        this.state = 
        {
            currentStep: 1
        };

        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
    }

    _next() 
    {
        let currentStep = this.state.currentStep;
        // Make sure currentStep is set to something reasonable
        if (currentStep >= 2) 
        {
            currentStep = 3;
        } 
        else 
        {
            currentStep = currentStep + 1;
        }

        this.setState({
            currentStep: currentStep
        });
    }

    _prev() 
    {
        let currentStep = this.state.currentStep;

        if (currentStep <= 1) 
        {
            currentStep = 1;
        }
        else
        {
            currentStep = currentStep - 1;
        }

        this.setState({
            currentStep: currentStep
        });
    }

    render() {

        let currentStep = this.state.currentStep;

        return (
            <div>
                <Row>
                    <h4 className="titulo">Nova Solicitação</h4>
                </Row>
                <Row>
                    <Col xs={12} md={12} className="">
                        <AtendimentoSolicitacaoWizard />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AtendimentoSolicitacaoNova;