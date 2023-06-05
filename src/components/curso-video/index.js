import React, { Fragment } from "react";

// https://www.youtube.com/embed/videoseries?list=PL5RBIda6PwG97VbWqYQ3IB1mp2TkoPLpn -VOVÓ

const CursoVideo = (props) => {
    return (
        <Fragment>
            <h2 className="is-size-1 has-text-centered">{props.title}</h2>
            <br/>
            <div className="is-flex is-justify-content-center is-align-content-center">
                <iframe width="560" height="315" src={props.playlist} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="card">
                <div className="card-content">
                    <div className="content">
                        {props.sobre}
                        <br />
                        <br />
                        {props.sobre2}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CursoVideo