import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, Label, Input, FormGroup } from 'reactstrap';
import Select from 'react-select';

import axios from 'axios';

const PATH_BASE = 'http://localhost:3001/solicitacoes-categorias';

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};
const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
};

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);


class Categorias extends Component {
    constructor(props) {
        super(props);

        this.setCategorias = this.setCategorias.bind(this);
        this.onCategoriaChange = this.onCategoriaChange.bind(this);
        this.onSubCategoriaChange = this.onSubCategoriaChange.bind(this);
        this.onAtividadeChange = this.onAtividadeChange.bind(this);

        this.state = {
            categorias: null
            ,categoria_sel: null
            ,sub_categoria_sel: null
            ,atividade_sel: null
        };
    }

    setCategorias(categorias) {
        this.setState({ categorias });
    }

    onCategoriaChange(newValue, actionMeta) {
        console.group('Categoria Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
        this.setState({ categoria_sel: newValue });
    }

    onSubCategoriaChange(newValue, actionMeta) {
        console.group('Sub-Categoria Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
        this.setState({ sub_categoria_sel: newValue });
    }

    onAtividadeChange(newValue, actionMeta) {
        console.group('Atividade Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
        this.setState({ atividade_sel: newValue });
    }

    componentWillMount() {
        axios(PATH_BASE)
        .then(result => this.setCategorias(result.data))
        .catch(error => error);
    }

    handleChange = (newValue, actionMeta) => {
        
    };

    render() 
    {
        if (!this.state.categorias) { return null; }

        return(
            <Form>
                <FormGroup row>
                    <Label className="label-caixa-form" sm={2} for="exampleSelectMulti">Categoria:</Label>
                    <Col sm={10}>
                       <Select className="select-caixa" autoFocus options={this.state.categorias} onChange={this.onCategoriaChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label className="label-caixa-form" sm={2} for="exampleSelectMulti">Sub-Categoria:</Label>
                    <Col sm={10}>
                        <Select options={this.state.subcategorias} onChange={this.onSubCategoriaChange} formatGroupLabel={formatGroupLabel}  />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label className="label-caixa-form" sm={2} for="exampleSelectMulti">Atividade:</Label>
                    <Col sm={10}>
                        <Select options={this.state.atividades} onChange={this.onAtividadeChange} formatGroupLabel={formatGroupLabel} />
                    </Col>
                </FormGroup>
                <Button outline color="primary" size="sm" onClick={this._validate}>Avançar</Button>
            </Form>
        );
    }
}

export default Categorias;