import React, { Component } from 'react';
import Select from 'react-select';

import axios from 'axios';

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

class Atividade extends Component {
    constructor(props) {
        super(props);

        this.setAtividades = this.setAtividades.bind(this);

        this.state = {
            atividade_selecionada: null
            ,atividades: []
        }
    }

    setAtividades(atividades) {
        this.setState({ atividades });
    }

    componentWillMount() 
    {
        axios.get(PATH_ATIVIDADES)
        .then((result) => {
            this.setState({ 
                atividades: result.data
            })
        })
    }

    render() 
    {
        if (!this.state.atividades)     { return null; }

        if(this.props.somente_leitura)
        {
            if(this.state.atividade_selecionada)
                return ("");
            else
                return ("Nenhuma atividade selecionada");
        }
        else
        {
            return (
                <Select 
                    formatGroupLabel={formatGroupLabel} 
                    value={this.state.atividade_sel} 
                    selectedValue={this.state.atividade_sel} 
                    options={this.state.atividades} 
                    onChange={this.props.onChange} isClearable={true} 
                />
            );
        }
    }
}

export default Atividade;