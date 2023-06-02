import React, { Fragment } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Cursos from "../components/cursos";

const CursosScreen = () => {
    return (
        <Fragment>
            <Header />

            <section className="section">
                <div className="card">
                    <Cursos />
                </div>
            </section>

            <Footer />
        </Fragment>
    )
}

export default CursosScreen