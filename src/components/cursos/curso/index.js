import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const CursoItem = (props) => {
    let linkUrl = `/cursos/curso/${props.id}`

    return (
        <Fragment>
            <Link to={linkUrl}>
                <div className="card">
                    <header className="card-header">
                        <p className="card-header-title">
                            {props.title}
                        </p>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            {props.sobre}
                        </div>
                        <p className="has-text-link has-text-weight-bold">APENAS CLIQUE NO POST!!!!!!</p>
                    </div>
                </div>
            </Link>
            <br/>
        </Fragment>
    )
}

export default CursoItem