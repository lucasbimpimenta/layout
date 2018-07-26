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

const isCategoriaSelecionada = categoria_sel => item => (categoria_sel) ? item.value === categoria_sel : item.value !== '';
const isSubCategoriaSelecionada = subcategoria_sel => item => (subcategoria_sel) ? item.value === subcategoria_sel : item.value !== '';

const getItemPorValue = (subMenuItems, value) => {
    if (subMenuItems) {
        for (var i = 0; i < subMenuItems.length; i++) {
            if (subMenuItems[i].value == value) {
                return subMenuItems[i];
            }
            var found = getItemPorValue(subMenuItems[i].options, value);
            if (found) return found;
        }
    }
};

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
        this.setState({ sub_categoria_sel: (newValue) ? newValue.value : null });
    }

    onAtividadeChange(newValue, actionMeta) {
        this.setState({ atividade_sel: (newValue) ? newValue.value : null });
        //console.log(this.state.atividades.filter(item => item.options && item.options.length > 0));
        //console.log(this.state.atividades.filter(item => item.options && item.options.length > 0).map( item => item.options.filter(opt => opt.value === 6)));
        console.log(getItemPorValue(this.state.atividades, 6));
    }

    componentWillMount() 
    {
        axios.get(PATH_CATEGORIAS)
        .then((result) => {
            const categorias = result.data
            this.setState({ 
            categorias: categorias
            })
        })

        axios.get(PATH_SUBCATEGORIAS)
        .then((result) => {
            const subcategorias = result.data
            this.setState({ 
                subcategorias: subcategorias
            })
        })

        axios.get(PATH_ATIVIDADES)
        .then((result) => {
            const atividades = result.data
            this.setState({ 
                atividades: atividades
            })
        })
    }

    render() 
    {
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
                        <Select formatGroupLabel={formatGroupLabel}  options={this.state.subcategorias.filter(isCategoriaSelecionada(this.state.categoria_sel))} onChange={this.onSubCategoriaChange} isClearable={true} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label className="label-caixa-form" sm={2} for="exampleSelectMulti">Atividade:</Label>
                    <Col sm={10}>
                        <Select formatGroupLabel={formatGroupLabel}  options={this.state.atividades.filter(isSubCategoriaSelecionada(this.state.sub_categoria_sel))} onChange={this.onAtividadeChange} isClearable={true} />
                    </Col>
                </FormGroup>
                <Button outline disabled={(this.state.atividade_sel) ? false : true} color="primary" size="sm" onClick={this._validate}>Avançar</Button>
            </Form>
        );
    }
}

export default Categorias;