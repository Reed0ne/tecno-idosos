import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import Header from "../components/header"
import Footer from "../components/footer"

const InitialScreen = () => {
    return (
        <Fragment>
            <Header />

            <section className="section">
                <div className="card">
                    <div className="card-content">
                        <div className="content">
                            <h2 className="has-text-centered">Seja bem-vindo(a)!</h2>
                            <p className="is-size-5 is-6 has-text-justified">
                                Seja bem-vindo ao nosso site! Estamos muito felizes em recebê-lo aqui e esperamos que você desfrute da sua visita. Nosso objetivo é fornecer a você uma experiência excepcional, repleta de informações úteis e recursos relevantes para atender às suas necessidades. Navegue à vontade e descubra tudo o que temos a oferecer. Este site foi cuidadosamente projetado para ser intuitivo e fácil de usar, para que você possa encontrar o que procura rapidamente. Fique à vontade para explorar nossos artigos, produtos ou serviços e não hesite em nos contatar se tiver alguma dúvida ou precisar de assistência. Agradecemos por escolher nosso site e esperamos que você encontre o que procura e tenha uma experiência agradável.
                            </p>
                            <img className="image is-9by9" src="https://www.techreviews.com.br/wp-content/uploads/2021/06/30222413_m.jpg">
                            </img>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="content">
                            <h2 className="is-size-1 has-text-centered">Sobre nós</h2>

                            <p className="has-text-weight-medium is-size-4 has-text-justified">
                                Somos uma equipe apaixonada e dedicada que busca proporcionar a você uma experiência única e significativa. Combinamos conhecimentos especializados e criatividade para oferecer soluções inovadoras e personalizadas às suas necessidades. Nossa missão é auxiliar nossos clientes fornecendo cursos gratuitos e de fácil acesso instruindo nossos clientes nas tecnologias do mundo contemporâneo.
                            </p>

                            <Link to='/contato' className="has-text-right">
                                <p className="has-text-primary-dark is-size-5">
                                    Saiba mais sobre nossa equipe
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default InitialScreen