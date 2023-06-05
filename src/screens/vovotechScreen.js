import React, {Fragment} from "react";
import Header from '../components/header'
import Footer from '../components/footer'
import CursoVideo from "../components/curso-video";

const VovoTechScreen = () => {
    return (
        <Fragment>
            <Header />

            <section className="section">
                <CursoVideo playlist="https://www.youtube.com/embed/videoseries?list=PL5RBIda6PwG97VbWqYQ3IB1mp2TkoPLpn"
                title="Dicas - Vovó Hi-Tech"
                sobre="Playlist da serie de vídeos para ajudar quem quer aprender um pouco mais do mundo da internet. Inclusão digital voltada para idosos."
                sobre2=" Com dicas e tutoriais rápidos para aprender a mexer no seu smartphone (celular) #vovohitech"/>
            </section>

            <Footer />
        </Fragment>
    )
}

export default VovoTechScreen