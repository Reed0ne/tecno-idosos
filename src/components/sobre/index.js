import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SobreComponent = (props) => {
    return (
        <Fragment>
            <div className="card">
                <div className="card-content">
                    <div className="content">
                        <h2 className="is-size-1 has-text-centered">Sobre nós</h2>

                        <p className="has-text-weight-medium is-size-4 has-text-justified">
                            Somos uma equipe apaixonada e dedicada que busca proporcionar a você uma experiência única e significativa. Combinamos conhecimentos especializados e criatividade para oferecer soluções inovadoras e personalizadas às suas necessidades. Nossa missão é auxiliar nossos clientes fornecendo cursos gratuitos e de fácil acesso instruindo nossos clientes nas tecnologias do mundo contemporâneo.
                        </p>

                        <Link to={props.link} className="has-text-right">
                            <p className="has-text-primary-dark is-size-5">
                                {props.content}
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SobreComponent