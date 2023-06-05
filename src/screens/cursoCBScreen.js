import React, {Fragment} from "react";
import Header from '../components/header'
import Footer from '../components/footer'
import CursoVideo from "../components/curso-video";

const informaticaBasicaScreen = () => {
    return (
        <Fragment>
            <Header />

            <section className="section">
                <CursoVideo playlist="https://www.youtube.com/embed/videoseries?list=PL-QAz5R5Rlm7wn20xLTIr84gbS2XkzqEZ"
                title="Curso de Informática Básica"
                sobre="Conteúdo programático do Curso de Informática Online inclui: Software x Hardware, Área de Trabalho / DeskTop e etc."
                sobre2="O que é informática básica? A informática básica ensina os conceitos fundamentais dos computadores, que facilitam a vida e a organização do trabalho. Seu entendimento é um pré-requisito comum para muitas vagas de emprego. Compreender a diferença entre os conceitos de software e hardware é fundamental. O termo hardware se refere a todos os itens físicos de um dispositivo, ou seja, tudo aquilo que pode ser tocado."/>
            </section>

            <Footer />
        </Fragment>
    )
}

export default informaticaBasicaScreen