import React, { Fragment } from "react";

const Person = (props) => {
    let github = props.github
    let githubSection

    if (!github || github.lenght == 0) {
        githubSection = <Fragment>
            <p class="subtitle is-6 is-italic">
                Não possui Github
            </p>
        </Fragment>
    } else {
        githubSection = <Fragment>
            <p class="subtitle is-6">Github: <a href={props.githubLink} target="_blank">{props.github}</a></p>
        </Fragment>
    }

    return (
        <Fragment>
            <div class="card">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src={props.img_url} alt="Placeholder image" />
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">{props.name}</p>
                            {githubSection}
                        </div>
                    </div>

                    <div class="content">
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