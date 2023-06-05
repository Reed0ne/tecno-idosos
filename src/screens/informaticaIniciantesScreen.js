import React, {Fragment} from "react";
import Header from '../components/header'
import Footer from '../components/footer'
import CursoVideo from "../components/curso-video";

const InformaticaInicianteScreen = () => {
    return (
        <Fragment>
            <Header />

            <section className="section">
                <CursoVideo playlist="https://www.youtube.com/embed/videoseries?list=PLvLgasm0pBrzE2nzJpqTAShV3V1V-d753"
                title="Informática para a Melhor idade e iniciantes"
                sobre="Apresentação das aulas e tira dúvidas para pessoas da melhor idade e iniciantes, que não sabem trabalhar com computadores e smartphone ou que ainda tem dificuldades."
                sobre2="Curso voltado para iniciantes e idosos!!!"/>
            </section>

            <Footer />
        </Fragment>
    )
}

export default InformaticaInicianteScreen