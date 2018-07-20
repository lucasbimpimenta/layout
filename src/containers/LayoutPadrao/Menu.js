import React, { Component } from 'react';

import { 
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import axios from 'axios';

const PATH_BASE = ' http://localhost:3001/menus';

const imprimeMenu = (item) => {
    if(item.filhos && item.filhos.length > 0)
    {
        return (
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                {item.title}
            </DropdownToggle>
            <DropdownMenu right>
            {item.filhos.sort(function(a, b) { return a.ordem - b.ordem; }).map(filho =>
               <DropdownItem tag="a" href={filho.endereco}>{filho.title}</DropdownItem>
            )}
            </DropdownMenu>
        </UncontrolledDropdown>
        );
    }
    else
    {
        return (
        <NavItem>
            <NavLink href={item.endereco}>{item.title}</NavLink>
        </NavItem>
        );
    }
};

class Menu extends Component {

    constructor(props) {
        super(props);

        this.setMenuPermitidos = this.setMenuPermitidos.bind(this);

        this.state = {
            menus_permitidos: null
        };
    }

    setMenuPermitidos(menus_permitidos) {
        this.setState({ menus_permitidos });
    }

    componentWillMount() {
        axios(PATH_BASE)
        .then(result => this.setMenuPermitidos(result.data))
        .catch(error => error);
    }

    render() 
    {
        if (!this.state.menus_permitidos) { return null; }

        return (

            this.state.menus_permitidos.sort(function(a, b) { return a.ordem - b.ordem; }).map(item =>
               imprimeMenu(item)
            )
        );
    }
}

export default Menu;