import React, { Fragment } from "react";

const Person = (props) => {
    let github = props.github
    let githubSection

    if (!github || github.lenght === 0) {
        githubSection = <Fragment>
            <p className="subtitle is-6 is-italic">
                Não possui Github
            </p>
        </Fragment>
    } else {
        githubSection = <Fragment>
            <p className="subtitle is-6">Github: <a href={props.githubLink} target="_blank">{props.github}</a></p>
        </Fragment>
    }

    return (
        <Fragment>
            <div className="card">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src={props.img_url} alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{props.name}</p>
                            {githubSection}
                        </div>
                    </div>

                    <div className="content">
                        <p>{props.text}</p>
                        <a href={props.linkedin} target="_blank">Linkedin</a>
                        <br />
                        <time className="is-italic is-size-5 has-text-right">
                            <p>{props.work}</p>
                        </time>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Person