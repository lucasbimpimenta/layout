import React, { Component } from 'react';

class CabecalhoPadrao extends Component {
  render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary bg-caixa-2017" >
            <a href="" class="navbar-brand logo_caixa">Caixa</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarBootstrapTiNegocios" aria-controls="navbarBootstrapTiNegocios"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarBootstrapTiNegocios">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link cx-style-setter" href="" cx-style="cosmo">Início
                            <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
                <ul class="navbar-nav navbar-right">
                    <li>
                        <a data-toggle="collapse" href="#nav-login" aria-expanded="false" aria-controls="nav-login">
                            <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                        </a>
                    </li>
                    <li>
                        <a data-toggle="collapse" href="#nav-buscar" aria-expanded="false" aria-controls="nav-buscar">
                            <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
  }
}

export default CabecalhoPadrao;