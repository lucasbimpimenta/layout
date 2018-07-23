import React, { Component } from 'react';
import { Row, Col, Nav, NavItem, NavLink, Badge, Container } from 'reactstrap';
import { matchRoutes, renderRoutes } from 'react-router-config'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

// routes config
import routes from '../../routes';

class AtendimentoSolicitacao extends Component {
    constructor(props) {
        super(props);

        const { match, location, history } = this.props
        //const branch = matchRoutes(routes, location.pathname)

        this.state = { rota: null, branch: matchRoutes(routes, location.pathname) };
    }

    render() {
        
        this.state.rota = this.state.branch[0].route.routes;

        return (
            <div>
                <Row>
                    <h3 class="titulo">Solicitação</h3>
                </Row>
                <Row>
                    <Col sm="2">
                        <Nav className="menu_interno_caixa" vertical>
                            <NavItem>
                                <NavLink href="#/atendimento/solicitacao/nova">Nova Solicitação</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#/atendimento/solicitacao/usuario">Minhas solicitações&nbsp;<Badge color="info" pill>50</Badge></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#/atendimento/solicitacao/unidade">Solicitações da Unidade&nbsp;<Badge color="info" pill>0</Badge></NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col sm="10">
                        <Container fluid> 
                            <Switch>
                                {this.state.rota.map((route, idx) => {
                                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                                        <route.component {...props} />
                                    )} />)
                                    : (null);
                                },
                                )}
                            </Switch>
                        </Container>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default withRouter(AtendimentoSolicitacao);