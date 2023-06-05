import React, { Fragment } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const ErrorScreen = () => {
    return (
        <Fragment>
            <Header />

            <section className="section">
                <h1>PÁGINA NÃO ENCONTRADA</h1>

                <p>POR FAVOR VOLTE PARA O MENU INICIAL E CONTINUE A NAVEGAR NO SITE</p>

                <Link to="/">Voltar para o Home</Link>
            </section>

            <Footer />
        </Fragment>
    )
}

export default ErrorScreen