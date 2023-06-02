import React, { Fragment } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import ContactComponent from "../components/contato"

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
                <ContactComponent link="/sobre-nos"
                content="Saiba mais sobre nossa equipe"/>
            </section>
            <Footer />
        </Fragment>
    )
}

export default InitialScreen