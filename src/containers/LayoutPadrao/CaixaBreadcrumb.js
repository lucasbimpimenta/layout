import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {withRouter, Link, Route} from 'react-router-dom';

import routes from '../../routes';

const findRouteName = (url) => {
    const objs = routes.filter(obj => {
        return obj.path === url
    });

    console.log(objs);

    return objs.length ? objs[0].name : url;
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
    const routeName = findRouteName(match.url);

    console.log(routeName);
  
    if (routeName) {
      return (
        match.isExact ?
          (
            <li className="active">{routeName}</li>
          ) :
          (
            <li>
              <Link to={match.url || ''}>
                {routeName}
              </Link>
            </li>
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
                {paths.map(p => <Route path={p} component={BreadcrumbsItem} />)}
            </Breadcrumb>
        )
    }
}

//export default CaixaBreadcrumb;

export default withRouter(CaixaBreadcrumb);