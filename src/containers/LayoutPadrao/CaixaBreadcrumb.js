import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {withRouter, Link, Route} from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config'

import routes from '../../routes';

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const findRouteName = (rotas, url) => {
    const objs = rotas.filter(obj => {
        return obj.path === url
    });

   // console.log(objs);

    return objs.length ? objs[0].name : url.replace("/","").capitalizeFirstLetter();
};

const getPaths = (pathname) => {
    const paths = [];
  
    if (pathname === '/') return paths;
  
    pathname.split('/').reduce((prev, curr, index) => {
      const currPath = `${prev}/${curr}`;
      paths.push(currPath);
      return currPath;
    });
  
    return paths;
  };

  const BreadcrumbsItem = ({ match }) => {

    const routeName = findRouteName(routes, match.url);

   const tem_link = routes.filter(obj => {
        return obj.path === match.url
    });
  
    if (routeName) {
      return (
        match.isExact ?
          (
            <li className="active">{routeName}</li>
          ) :
          (
            (tem_link.length) ?
            <li>
              <Link to={match.url || ''}>
                {routeName}
              </Link>
            </li>
            :
            <li>{routeName}</li>
          )
      );
    }
    return null;
  };
  

class CaixaBreadcrumb extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        const { match, location, history } = this.props

        const paths = getPaths(location.pathname);

        return (
            <Breadcrumb>
                <b>Você está em:&nbsp;</b>
                {paths.map(p => <Route path={p} component={BreadcrumbsItem} />)}
            </Breadcrumb>
        )
    }
}

//export default CaixaBreadcrumb;

export default withRouter(CaixaBreadcrumb);