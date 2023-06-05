import React, {Fragment} from "react";
import Header from '../components/header'
import Footer from '../components/footer'
import CursoVideo from "../components/curso-video";

const MatematicaScreen = () => {
    return (
        <Fragment>
            <Header />

            <section className="section">
                <CursoVideo playlist="https://www.youtube.com/embed/videoseries?list=PLTPg64KdGgYgFpOFt2TETLdEuBB4fvxxf"
                title="Matemática Básica (Curso Completo)"
                sobre="O curso de Matemática Básica oferece a melhor oportunidade para adquirir um conhecimento sólido das operações, propriedades e métodos matemáticos. "
                sobre2="Assista a todas as aulas, faça um caderno sobre o assunto e abra, assim, o teu caminho rumo à aprovação. Boas aulas!"/>
            </section>

            <Footer />
        </Fragment>
    )
}

export default MatematicaScreen