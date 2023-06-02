import React from "react";
import Person from "./membro";

const genericImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIzBac--nd6I2tdVhBcbKhPLmiNmcyaN5lA&usqp=CAU"
const genericLinkedin = 'https://linkedin.com/'

const Team = () => {
    return (
        <section className="section">
            <h2 className="is-size-2 has-text-centered">Nossa Equipe</h2>
            <br />
            <Person name="Danilo Maia"
                work="Líder da Equipe"
                text="Líder da Equipe ajudou os membros com a criação das etapas, além de auxiliar todos com o desenvolvimento interno do projeto."
                img_url={genericImage}
                github="DaniloGnome"
                githubLink="https://github.com/DaniloGnome"
                linkedin={genericLinkedin}
            />
            <Person name="Danyel Gian"
                work="Desenvolvedor"
                text="Responsável pelo desenvolvimento do site e suas interações, além disso ajudou nas entrevistas e formulação de ideias."
                img_url="https://avatars.githubusercontent.com/u/115191418?v=4"
                github="Reed0ne"
                githubLink="https://github.com/Reed0ne"
                linkedin="https://www.linkedin.com/in/danyel-gian-marques-44aa47266/"
            />
            <Person name="Bruno Alexandre"
                work="Auxiliar de Desenvolvimento"
                text="Responsável por auxiliar na etapa de desenvolvimento do projeto, além de colaborar na sugestão de ideias e de projetos."
                img_url={genericImage}
                github="BrunoAndu"
                githubLink="https://github.com/Brunoandu"
                linkedin={genericLinkedin}
            />
            <Person name="Israel Moura"
                work="Apresentador"
                text="Responsável pela apresentação do projeto durante as aulas do Vida e Carreira, além de também ajudar na criação de ideias."
                img_url={genericImage}
                github="raelzim"
                githubLink="https://github.com/raelzim"
                linkedin={genericLinkedin}
            />
            <Person name="Artur Calipo"
                work="Produtor do Video"
                text="Responsável pela criação do video e auxiliar com os cursos utilizados no projeto."
                img_url={genericImage}
                github=""
                githubLink=""
                linkedin={genericLinkedin}
            />
            <Person name="Gabriel Nicolau"
                work="Entrevistador"
                text="Responsável por colaborar com as entrevistas do projeto."
                img_url="https://avatars.githubusercontent.com/u/125833454?v=4"
                github="Gabrieldevfull"
                githubLink="https://github.com/Gabrieldevfull"
                linkedin="https://www.linkedin.com/in/gabriel-nicolau-734169267/"
            />
            <Person name="Gustavo"
                work="Auxiliar Geral"
                text="Responsável por auxiliar a equipe na parte inicial do projeto, fornecendo ideias e opiniões."
                img_url="https://avatars.githubusercontent.com/u/127751205?v=4"
                github="Gustahx"
                githubLink="https://github.com/Gustahx"
                linkedin={genericLinkedin}
            />
        </section>
    )
}

export default Team