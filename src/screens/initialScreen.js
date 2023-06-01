import React, { Fragment } from 'react';
import WebHeader from '../shared/SiteHeader';

const InitialScreen = () => {
    return (
        <Fragment>
            <WebHeader />
            
            <main className='content'>
                <section className='welcome'>
                    <h2>Seja bem-vindo(a)</h2>
                    <p>
                        Seja bem-vindo ao nosso site! Estamos muito felizes em recebê-lo aqui e esperamos que você desfrute da sua visita. Nosso objetivo é fornecer a você uma experiência excepcional, repleta de informações úteis e recursos relevantes para atender às suas necessidades. Navegue à vontade e descubra tudo o que temos a oferecer. Este site foi cuidadosamente projetado para ser intuitivo e fácil de usar, para que você possa encontrar o que procura rapidamente. Fique à vontade para explorar nossos artigos, produtos ou serviços e não hesite em nos contatar se tiver alguma dúvida ou precisar de assistência. Agradecemos por escolher nosso site e esperamos que você encontre o que procura e tenha uma experiência agradável.
                    </p>
                </section>

                <section className='carousel'>
                    <div className='image-carousel'></div>
                    <div className='image-carousel'></div>
                    <div className='image-carousel'></div>
                    <div className='image-carousel'></div>
                </section>

                <section className='contact'>
                    <h2>Sobre nós</h2>
                    <p>
                        Somos uma equipe apaixonada e dedicada que busca proporcionar a você uma experiência única e significativa. Combinamos conhecimentos especializados e criatividade para oferecer soluções inovadoras e personalizadas às suas necessidades. Nossa missão é auxiliar nossos clientes fornecendo cursos gratuitos e de fácil acesso instruindo nossos clientes nas tecnologias do mundo contemporâneo.
                    </p>
                </section>
            </main>

            <footer>
                <p>
                    © 2023 - Todos os direitos reservados. Tecno Idosos - Seu Portal de Aprendizado
                </p>
                <p>Telefone: (00) 90000-0000</p>
                <p>E-mail: idosostecno@gmail.com</p>
            </footer>
        </Fragment>
    )
}

export default InitialScreen