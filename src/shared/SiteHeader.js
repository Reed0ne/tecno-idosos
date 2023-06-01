import React, { Fragment } from "react";

const WebHeader = () => {
    return (
        <Fragment>
            <header>
                <h1>Tecno Idosos</h1>
                <nav>
                    <ul>
                        <a href=''><li className='nav-pages'>HOME</li></a>
                        <a href=''><li className='nav-pages'>CURSOS</li></a>
                        <a href=''><li className='nav-pages'>SOBRE NÓS</li></a>
                    </ul>
                </nav>
            </header>
        </Fragment>
    )
}

export default WebHeader