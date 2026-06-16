import '../PageAboutUs/PageAboutUs.styles.css'
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { ValuesCard } from "../../components/ValuesCard"
import { TeamCard } from "../../components/TeamCard"

export function PageAboutUs() {

    // ------- Dados para as tags -------------
    const tags = [
        { id: 1, tag: "Encontros culturais" },
        { id: 2, tag: "Troca de experiência"},
        { id: 3, tag: "Comunidade"},
        { id: 4, tag: "Educação"},
        { id: 5, tag: "Aprendizado"},
        { id: 6, tag: "Acesso à informação"},
        { id: 7, tag: "Conhecimento"},
        { id: 8, tag: "Inspiração"},
    ];

    // -------- Dados para seção 'Nossos Valores' --------
    const values = [
        {
            title: "Acesso para todos",
            bgColor: "var(--amarelo600)",
            image: "src/assets/pageaboutus/valores1.svg",
        },
        {
            title: "Amor pela leitura",
            bgColor: "var(--verdeoliva200)",
            image: "src/assets/pageaboutus/valores2.svg",
        },
        {
            title: "Comunidade e troca",
            bgColor: "var(--rosa500)",
            image: "src/assets/pageaboutus/valores3.svg",
        },
    ];

    // ------- Dados para seção 'Nossa Equipe' --------
    const team = [
        {
            name: "Maria Marta",
            image: "src/assets/pageaboutus/equipe1.svg",
            bgColor: "var(--laranja300)",
        },
        {
            name: "Júlia Maria",
            image: "src/assets/pageaboutus/equipe2.svg",
            bgColor: "var(--verdeoliva300)",
        },
        {
            name: "Jennifer Oliveira",
            image: "src/assets/pageaboutus/equipe3.svg",
            bgColor: "#D12BA8",
        },
        {
            name: "Josivaldo Lopes",
            image: "src/assets/pageaboutus/equipe4.svg",
            bgColor: "#006B4D",
        },
    ];


    return (
        <>

            <Navbar></Navbar>
            {/* ----------- Conteúdo da página ---------- */}
            <div className='aboutus_container'>
                {/* ---------- Banner inicial ------------ */}
                <section className='aboutus_hero'>
                    <div className='hero_mascote'>
                        <img src='src/assets/pageaboutus/mascote_banner.svg'></img>
                    </div>
                    <div className='hero_content'>
                        <img className='hero_content_logo' src='src/assets/pageaboutus/theka_logotipo.svg'></img>
                        <p className='hero_content_text'>A Theka©  é um espaço feito para conectar pessoas e histórias. Aqui você encontra livros para todos os gostos, além de atividades que incentivam o conhecimento, a cultura e a troca de experiências. Mais do que estantes cheias, somos um ponto de encontro para quem acredita no poder da leitura em transformar vidas.</p>
                    </div>
                </section>

                {/* ------- Tags  -------- */}
                <section className='aboutus_tags'>
                    {tags.map((item) => {
                        return(
                            <div key={item.id} className='tag_item' >
                                {item.tag}
                            </div>
                        );
                    })}
                </section>

                {/* ---------- Seção contendo 'Nossa história', 'Nossos valores' e 'Nossa equipe' --------- */}
                <section className='aboutus_content'>

                    {/* ----- Nossa história ------ */}
                    <section className='our_story'>
                        <div className='our_story_content'>
                            <h1 className='our_story_title'>Nossa história</h1>
                            <p className='our_story_text'>
                                A biblioteca nasceu do desejo de oferecer um espaço de acesso à leitura, ao conhecimento e à cultura. No começo, era apenas uma pequena coleção de livros reunidos com carinho, mas, com o tempo, foi crescendo e conquistando cada vez mais leitores.
                                <br /><br />
                                Hoje, além de guardar histórias nas estantes, também faz parte da história de quem passa por aqui: estudantes, pesquisadores, curiosos e apaixonados por livros. Seguimos firmes na missão de ser um ponto de encontro, aprendizado e inspiração para todos.
                            </p>
                        </div>
                        <div className='our_story_img'>
                            <img src='src/assets/pageaboutus/nossa_historia_logotipo.svg'></img>
                        </div>
                    </section>
                    {/* ------ Nossos valores ------ */}
                    <section className='our_values'>
                        <h1 className='our_values_title'>Nossos valores</h1>

                        <div className="values_grid">
                            {values.map((values) => (
                                <ValuesCard
                                    key={values.title}
                                    title={values.title}
                                    bgColor={values.bgColor}
                                    image={values.image}
                                />
                            ))}
                        </div>
                    </section>
                    {/* ------ Nossa equipe ------ */}
                    <section className='our_team'>
                        <h1 className='our_team_title'>Nossa equipe</h1>

                        <div className="our_team_cards">
                            {team.map((member) => (
                                <TeamCard
                                    key={member.name}
                                    image={member.image}
                                    name={member.name}
                                    bgColor={member.bgColor}
                                />
                            ))}
                        </div>
                    </section>
                </section>
            </div>
            <Footer></Footer>
        </>
    );
}