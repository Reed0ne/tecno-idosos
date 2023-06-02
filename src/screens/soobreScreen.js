import React, { Fragment } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SobreComponent from "../components/sobre";
import { Link } from "react-router-dom";

const SobreScreen = () => {
    return (
        <Fragment>
            <Header />
            <section className="section">
                <SobreComponent />
                <div className="card">
                    <div className="card-content">
                        <div className="content">
                            <p className="has-text-weight-medium is-size-4 has-text-justified">
                                Reconhecemos a importância de estar atualizado em um mundo em constante mudança e queremos capacitar você a navegar nesse cenário digital em rápida transformação.
                                <br/>
                                <br/>
                                Nossa equipe está empenhada em desenvolver cursos que abrangem uma ampla gama de tópicos, desde programação e inteligência artificial até design de interfaces e marketing digital. Queremos fornecer a você as habilidades e o conhecimento necessários para enfrentar os desafios do mundo digital, capacitando-o a aproveitar as oportunidades que surgem.
                                <br/>
                                <br/>
                                Acreditamos que a educação e a aprendizagem contínua são fundamentais para o crescimento pessoal e profissional. Portanto, nossa prioridade é garantir que nossos cursos sejam acessíveis e adaptados às suas necessidades individuais. Nossa plataforma online oferece uma variedade de recursos, incluindo aulas em vídeo, materiais de leitura complementares e fóruns interativos, nos quais você pode se envolver e interagir com outros alunos e instrutores.
                                <br/>
                                <br/>
                                Nosso compromisso com a excelência não para por aí. Estamos constantemente pesquisando e explorando novas tecnologias e tendências, a fim de atualizar e expandir nosso catálogo de cursos. Queremos garantir que você tenha acesso às informações mais recentes e relevantes do mundo digital.
                                <br/>
                                <br/>
                                Junte-se a nós nessa jornada emocionante de aprendizado e descoberta. Estamos ansiosos para fazer parte do seu crescimento e sucesso contínuos. Vamos avançar juntos rumo a um futuro digital brilhante e cheio de possibilidades.</p>
                        </div>

                        <Link to='/' className="has-text-right">
                            <p className="has-text-primary-dark is-size-5">Volte ao Home</p>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default SobreScreen