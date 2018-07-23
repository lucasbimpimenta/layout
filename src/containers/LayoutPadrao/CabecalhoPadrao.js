import React, { Component } from 'react';
import { 
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
 } from 'reactstrap';


import Menu from './Menu';

class CabecalhoPadrao extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
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
            <Navbar expand="lg" dark fixed="top" className="bg-primary bg-caixa-2017">
                <NavbarBrand href="/" className="logo_caixa">&nbsp;</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <Menu/>
                    </Nav>
                </Collapse> 
            </Navbar>
        );
    }
}

export default CabecalhoPadrao;