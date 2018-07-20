import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {withRouter} from 'react-router-dom';

const SomeComponent = withRouter(props => <CaixaBreadcrumb {...props}/>);

class CaixaBreadcrumb extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        const { match, location, history } = this.props

        return (
            <Breadcrumb>
                <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
            </Breadcrumb>
        )
    }
}

export default CaixaBreadcrumb;