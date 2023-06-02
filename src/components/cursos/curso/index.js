import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const CursoItem = (props) => {
    let linkUrl = `/cursos/curso/${props.id}`

    return (
        <Fragment>
            <Link to={linkUrl}>
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                            {props.title}
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            {props.sobre}
                        </div>
                        <p>APENAS CLIQUE NO POST!!!!!!</p>
                    </div>
                </div>
            </Link>
        </Fragment>
    )
}

export default CursoItem