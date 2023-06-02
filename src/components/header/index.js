import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Fragment>
            <nav className="navbar is-light" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <h1 className="title is-5 has-text-dark">🧵  Tecno Idosos</h1>
                    </Link>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link to='/' className="navbar-item">
                            Home
                        </Link>

                        <Link to='/cursos' className="navbar-item">
                            Cursos
                        </Link>

                        <Link to='/suporte' className="navbar-item">
                            Suporte
                        </Link>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                Veja mais
                            </a>

                            <div className="navbar-dropdown">
                                <Link to='/sobre-nos' className="navbar-item">
                                    Sobre nós
                                </Link>
                                <Link to='/equipe' className="navbar-item">
                                    Equipe de Desenvolvimento
                                </Link>
                                <hr className="navbar-divider" />
                                    <Link to="/suporte" className="navbar-item">
                                        Reporte algum erro
                                    </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header