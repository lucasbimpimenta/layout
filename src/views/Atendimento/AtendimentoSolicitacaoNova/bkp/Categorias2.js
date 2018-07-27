import React, { Component } from 'react';
import { Col, Button, Form, Label, FormGroup } from 'reactstrap';
import AsyncSelect from 'react-select/lib/Async'

import axios from 'axios';

const PATH_CATEGORIAS       = 'http://localhost:3001/categorias';
const PATH_SUBCATEGORIAS    = 'http://localhost:3001/subcategorias';
const PATH_ATIVIDADES       = 'http://localhost:3001/atividades';

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

const getCategorias = () => {
  return axios.get(PATH_CATEGORIAS).then( (reponse) => reponse.data)
};

const getSubcategorias = (categoria) => {
    if(categoria){
        return axios.get(PATH_SUBCATEGORIAS).then( (reponse) => reponse.data.filter(i => i.categoria === categoria))
    } else {
        return axios.get(PATH_SUBCATEGORIAS).then( (reponse) => reponse.data)
    }
};

const getAtividades = (subcategoria) => {
  return axios.get(PATH_ATIVIDADES).then( (reponse) => reponse.data.filter(i => i.subcategoria === subcategoria))
};

class Categorias extends Component {
    constructor(props) {
        super(props);

        this.onCategoriaChange = this.onCategoriaChange.bind(this);
        this.onSubCategoriaChange = this.onSubCategoriaChange.bind(this);
        this.onAtividadeChange = this.onAtividadeChange.bind(this);

        this.state = {
            categoria_sel: null
            ,sub_categoria_sel: null
            ,atividade_sel: null
        };
    }

    onCategoriaChange(newValue, actionMeta) {
        console.group('Categoria Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
        this.setState({ categoria_sel: newValue });

        getSubcategorias(this.state.categoria_sel);
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

    render() 
    {
        console.log(this.state.categorias);

        return(
            <Form>
                <FormGroup row>
                    <Label className="label-caixa-form" sm={2} for="exampleSelectMulti">Categoria:</Label>
                    <Col sm={10}>
                       <AsyncSelect cacheOptions defaultOptions autoFocus loadOptions={getCategorias} onChange={this.onCategoriaChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label className="label-caixa-form" sm={2} for="exampleSelectMulti">Sub-Categoria:</Label>
                    <Col sm={10}>
                        <AsyncSelect cacheOptions defaultOptions autoFocus loadOptions={getSubcategorias} onChange={this.onSubCategoriaChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label className="label-caixa-form" sm={2} for="exampleSelectMulti">Atividade:</Label>
                    <Col sm={10}>
                        <AsyncSelect cacheOptions defaultOptions autoFocus loadOptions={getAtividades} onChange={this.onAtividadeChange} />
                    </Col>
                </FormGroup>
                <Button outline color="primary" size="sm" onClick={this._validate}>Avançar</Button>
            </Form>
        );
    }
}

export default Categorias;