import React, { Component } from 'react';
import { 
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';

const menus_permitidos = [
    {
        title: 'Atendimento',
        endereco: null,
        ordem: 2,
        filhos: [
                {
                    title: 'Solicitação',
                    endereco: '#/atendimento/solicitacao'
                },
                {
                    title: 'Atendimentos',
                    endereco: '#/atendimento/atendimentos'
                }
            ]
    },
    {
        title: 'Início',
        endereco: '#/inicio',
        ordem: 1,
        filhos: []
    },
];

class CabecalhoPadrao extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            menus_permitidos,
        };
    }

    toggle() 
    {
        this.setState({
            isOpen: !this.state.isOpen
     });
    }
    render() {
        return (
            <Navbar expand="lg" dark fixed className="bg-primary bg-caixa-2017">
                <NavbarBrand href="/" className="logo_caixa">&nbsp;</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                    {this.state.menus_permitidos.sort(function(a, b) { return a.ordem - b.ordem; }).map(item =>
                        () => {item.filhos && item.filhos.length > 0 ? (
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    {item.title}
                                </DropdownToggle>
                                <DropdownMenu right>

                                </DropdownMenu>
                            </UncontrolledDropdown>
                        ) : (
                             <NavItem>
                                <NavLink href={item.endereco}>{item.title}</NavLink>
                            </NavItem>
                        )}
                    )}
                    </Nav>
                </Collapse>
            </Navbar>
        /*
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary bg-caixa-2017" >
            <a href="" class="navbar-brand logo_caixa">Caixa</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarBootstrapTiNegocios" aria-controls="navbarBootstrapTiNegocios"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </nav>
        */
        );
    }
}

    export default CabecalhoPadrao;