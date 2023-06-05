import React, { Fragment } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const SuporteScreen = () => {
    return (
        <Fragment>
            <Header />

            <section className="section">
                <form method="post" action="mailto:idosostecno@gmail.com">
                    <div class="field">
                        <label class="label">Nome Completo</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Text input" />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Seu email</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input is-danger" type="email" placeholder="Digite seu Email" />
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-exclamation-triangle"></i>
                            </span>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Erro:</label>
                        <div class="control">
                            <textarea class="textarea" placeholder="Por favor digite com detalhes os erros encontrados..."></textarea>
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <label class="checkbox">
                                <input type="checkbox" />
                                Eu aceito os <a href="#">termos de condição</a>
                            </label>
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <label class="radio">
                                <input type="radio" name="question" />
                                Sim
                            </label>
                            <label class="radio">
                                <input type="radio" name="question" />
                                Não
                            </label>
                        </div>
                    </div>

                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-link">Enviar</button>
                        </div>
                        <div class="control">
                            <button class="button is-link is-light">Cancelar</button>
                        </div>
                    </div>
                </form>
            </section>

            <Footer />
        </Fragment>
    )
}

export default SuporteScreen