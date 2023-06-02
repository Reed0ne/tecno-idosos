import React, { Fragment } from "react";

// "https://www.youtube.com/embed/videoseries?list=PL-QAz5R5Rlm7wn20xLTIr84gbS2XkzqEZ" -CB
// https://www.youtube.com/embed/videoseries?list=PL5RBIda6PwG97VbWqYQ3IB1mp2TkoPLpn -VOVÓ

const CursoVideo = (props) => {
    return (
        <Fragment>
            <h2 className="is-size-1 has-text-centered">{props.title}</h2>
            <div className="is-flex is-justify-content-center is-align-content-center">
                <iframe width="560" height="315" src={props.playlist} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div class="card">
                <div class="card-content">
                    <div class="content">
                        {props.sobre}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CursoVideo