import React, { Component } from 'react';
import { Col, Button, Form, Label, FormGroup } from 'reactstrap';
import Select from 'react-select';

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

const isCategoriaSelecionada = categoria_sel => item => item.categoria === categoria_sel;
const isSubCategoriaSelecionada = subcategoria_sel => item => item.subcategoria === subcategoria_sel;

class Categorias extends Component {
    constructor(props) {
        super(props);

        this.setCategorias = this.setCategorias.bind(this);
        this.setSubcategorias = this.setSubcategorias.bind(this);
        this.setAtividades = this.setAtividades.bind(this);

        this.onCategoriaChange = this.onCategoriaChange.bind(this);
        this.onSubCategoriaChange = this.onSubCategoriaChange.bind(this);
        this.onAtividadeChange = this.onAtividadeChange.bind(this);

        this.state = {
            categorias: []
            ,subcategorias: []
            ,atividades: []
            ,categoria_sel: null
            ,sub_categoria_sel: null
            ,atividade_sel: null
        };
    }

    setCategorias(categorias) {
        this.setState({ categorias });
    }

    setSubcategorias(subcategorias) {
        this.setState({ subcategorias, });
    }

    setAtividades(atividades) {
        this.setState({ atividades });
    }

    onCategoriaChange(newValue, actionMeta) 
    {
        this.setState({ categoria_sel: (newValue) ? newValue.value : null });
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

    componentWillMount() 
    {
        axios.get(PATH_CATEGORIAS)
        .then((result) => {
            const categorias = result.data
            console.log("COMPONENT WILL Mount messages : ", categorias);
            this.setState({ 
            categorias: categorias
            })
        })

        axios.get(PATH_SUBCATEGORIAS)
        .then((result) => {
            const subcategorias = result.data
            console.log("COMPONENT WILL Mount messages : ", subcategorias);
            this.setState({ 
                subcategorias: subcategorias
            })
        })

        axios.get(PATH_ATIVIDADES)
        .then((result) => {
            const atividades = result.data
            console.log("COMPONENT WILL Mount messages : ", atividades);
            this.setState({ 
                atividades: atividades
            })
        })
    }

    render() 
    {
        console.log(this.state.categorias);

        if (!this.state.categorias) { return null; }
        if (!this.state.subcategorias) { return null; }
        if (!this.state.atividades) { return null; }

        return(
            <Form>
                <FormGroup row>
                    <Label className="label-caixa-form" sm={2} for="exampleSelectMulti">Categoria:</Label>
                    <Col sm={10}>
                       <Select className="select-caixa" autoFocus options={this.state.categorias} onChange={this.onCategoriaChange} isClearable={true} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label className="label-caixa-form" sm={2} for="exampleSelectMulti">Sub-Categoria:</Label>
                    <Col sm={10}>
                        <Select options={this.state.subcategorias.filter(isCategoriaSelecionada(this.state.categoria_sel))} onChange={this.onSubCategoriaChange}   />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label className="label-caixa-form" sm={2} for="exampleSelectMulti">Atividade:</Label>
                    <Col sm={10}>
                        <Select options={this.state.atividades} onChange={this.onAtividadeChange} />
                    </Col>
                </FormGroup>
                <Button outline color="primary" size="sm" onClick={this._validate}>Avançar</Button>
            </Form>
        );
    }
}

export default Categorias;