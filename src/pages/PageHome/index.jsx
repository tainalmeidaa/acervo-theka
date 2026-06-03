import '../PageHome/PageHome.styles.css'
import { useState } from 'react';
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ButtonAuthLayout } from '../../components/ButtonAuthLayout';
import { ButtonPageHome } from '../../components/ButtonPageHome';
import { MetricCard } from '../../components/MetricCard';
import { MetricSubCard } from '../../components/MetricSubCard';
import { BookCard } from '../../components/BookCard';

export function PageHome() {

    const [bookList, setBookList] = useState([
        {
            id: 0,
            title: "Os Sete Maridos de Evelyn Hugo",
            cover: "src/assets/pagehome/livro-1.png"
        },
        {
            id: 1,
            title: "A Cabeça do Santo",
            cover: "src/assets/pagehome/livro-2.png"
        },
        {
            id: 2,
            title: "Oração para desaparecer",
            cover: "src/assets/pagehome/livro-3.png"
        },
    ]);

    const rotateBooks = () => {
        setBookList((currentList) => {
            const [firstBook, ...remainingBooks] = currentList;
            return [...remainingBooks, firstBook];
        });
    };

    return (
        <>
            {/*<Navbar></Navbar>*/}
            <div className='pagehome__content'>

                {/* ------ Banner principal --------  */}
                <section className='hero__banner'>
                    <div className='information__banner'>
                        <div className='logo-texto__banner'>
                            <img className='logo__banner' src='src/assets/pagehome/logo-banner.svg' width={226} height={62}></img>
                            <h3>Desvende o mundo através dos livros.</h3>
                        </div>
                        <div className='button__banner'>
                            <ButtonAuthLayout nome="Acervo" para=""></ButtonAuthLayout>
                        </div>
                    </div>
                    <div className='mascote__banner'>
                        <img src='src/assets/pagehome/home-mascote.svg' alt='Imagem do mascote no Hero Banner'></img>
                    </div>
                </section>

                {/* ------- Seção para os livros novos da semana / destaques -------- */}
                <section className='specialbooks'>
                    <div className='information__specialbooks'>
                        <img src='src/assets/pagehome/arrow-circle-right.svg' width={68} height={68}></img>
                        <h1>Nós te ajudamos a conhecer os livros de uma forma diferente.</h1>
                        <p>Todo mês a gente separa livros especiais para você se inspirar, aprender ou se divertir. Pode ser novidade, clássico ou surpresa, sempre tem uma leitura esperando por você!</p>
                        <div className='buttons__specialbooks'>
                            <ButtonPageHome nome='Veja os destaques da semana' para=''></ButtonPageHome>
                            <ButtonPageHome nome='Acesse nosso acervo completo' para=''></ButtonPageHome>
                        </div>
                    </div>
                    
                    {/* ----- Fila dos livros em destaque ----- */}
                    <div className='specialbooks__cardbooks'>
                        {bookList.map((book, index) => (
                            <BookCard
                                key={book.id}
                                cover={book.cover}
                                title={book.title}
                                className={`fila_cardbooks position-${index}`}
                                onBookClick={index === 0 ? rotateBooks : undefined}
                            />
                        ))}
                    </div>
                </section>
                
                {/* ----- Seção contendo dados estatísticos do acervo ------ */}
                <section className='our__statistics'>
                    <h1>Nossas estatísticas</h1>
                    <div className='statistic__content'>

                        {/* ----- Estatísticas principais - cards maiores ----- */}
                        <div className='statistic__highlightgroup'>
                            <MetricCard
                                porcentagem='15%'
                                descricao='Aumento do acervo esse mês'
                                corFundo='var(--verdeoliva300)'
                                corTexto='var(--verdeoliva600)'
                            ></MetricCard>

                            <MetricCard
                                porcentagem='23%'
                                descricao='Aumento dos empréstimos'
                                corFundo='var(--laranja300)'
                                corTexto='var(--laranja600)'
                            ></MetricCard>
                        </div>
                        
                        {/* ----- Outras estatísticas - cards menores ----- */}
                        <div className='statistic__subgroup'>
                            <MetricSubCard
                                numero='487'
                                iconeSvg=
                                {<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.9731 19.6875C20.6878 17.4316 18.6807 15.6738 16.275 14.6972C17.4713 13.7999 18.355 12.549 18.8009 11.1216C19.2468 9.69424 19.2322 8.16274 18.7593 6.74407C18.2865 5.3254 17.3792 4.09148 16.166 3.21709C14.9529 2.34271 13.4954 1.87219 12 1.87219C10.5046 1.87219 9.04706 2.34271 7.83392 3.21709C6.62078 4.09148 5.7135 5.3254 5.24061 6.74407C4.76772 8.16274 4.75319 9.69424 5.19907 11.1216C5.64496 12.549 6.52865 13.7999 7.72498 14.6972C5.31928 15.6738 3.31221 17.4316 2.02686 19.6875C1.94721 19.8156 1.89413 19.9583 1.87076 20.1073C1.8474 20.2563 1.85423 20.4085 1.89084 20.5548C1.92746 20.7011 1.99312 20.8385 2.08392 20.9589C2.17472 21.0794 2.2888 21.1803 2.41938 21.2557C2.54996 21.3312 2.69438 21.3796 2.84405 21.3981C2.99373 21.4166 3.14559 21.4049 3.29062 21.3635C3.43566 21.3222 3.57089 21.2521 3.6883 21.1574C3.8057 21.0628 3.90288 20.9455 3.97404 20.8125C5.67279 17.8763 8.67279 16.125 12 16.125C15.3272 16.125 18.3272 17.8772 20.0259 20.8125C20.1802 21.0605 20.4248 21.2388 20.7081 21.3097C20.9914 21.3806 21.2912 21.3386 21.544 21.1925C21.7969 21.0464 21.9831 20.8077 22.0631 20.5268C22.1432 20.246 22.1109 19.945 21.9731 19.6875ZM7.12498 9C7.12498 8.03582 7.41089 7.09329 7.94657 6.2916C8.48224 5.48991 9.24361 4.86507 10.1344 4.49609C11.0252 4.12712 12.0054 4.03057 12.951 4.21868C13.8967 4.40678 14.7653 4.87108 15.4471 5.55286C16.1289 6.23464 16.5932 7.10328 16.7813 8.04894C16.9694 8.9946 16.8729 9.9748 16.5039 10.8656C16.1349 11.7564 15.5101 12.5177 14.7084 13.0534C13.9067 13.5891 12.9642 13.875 12 13.875C10.7075 13.8735 9.4684 13.3594 8.55448 12.4455C7.64056 11.5316 7.12647 10.2925 7.12498 9Z" fill="#FFC1CF" />
                                </svg>}
                                descricao='Usuários cadastrados'
                            ></MetricSubCard>

                            <MetricSubCard
                                numero='3.982'
                                iconeSvg=
                                {<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.75 4.125H15C14.4377 4.12482 13.8814 4.23995 13.3654 4.46328C12.8494 4.68662 12.3847 5.0134 12 5.42344C11.6153 5.0134 11.1506 4.68662 10.6346 4.46328C10.1186 4.23995 9.56226 4.12482 9 4.125H2.25C1.95163 4.125 1.66548 4.24353 1.4545 4.4545C1.24353 4.66548 1.125 4.95163 1.125 5.25V18.75C1.125 19.0484 1.24353 19.3345 1.4545 19.5455C1.66548 19.7565 1.95163 19.875 2.25 19.875H9C9.49728 19.875 9.97419 20.0725 10.3258 20.4242C10.6775 20.7758 10.875 21.2527 10.875 21.75C10.875 22.0484 10.9935 22.3345 11.2045 22.5455C11.4155 22.7565 11.7016 22.875 12 22.875C12.2984 22.875 12.5845 22.7565 12.7955 22.5455C13.0065 22.3345 13.125 22.0484 13.125 21.75C13.125 21.2527 13.3225 20.7758 13.6742 20.4242C14.0258 20.0725 14.5027 19.875 15 19.875H21.75C22.0484 19.875 22.3345 19.7565 22.5455 19.5455C22.7565 19.3345 22.875 19.0484 22.875 18.75V5.25C22.875 4.95163 22.7565 4.66548 22.5455 4.4545C22.3345 4.24353 22.0484 4.125 21.75 4.125ZM9 17.625H3.375V6.375H9C9.49728 6.375 9.97419 6.57254 10.3258 6.92418C10.6775 7.27581 10.875 7.75272 10.875 8.25V18.0759C10.2947 17.7789 9.65194 17.6243 9 17.625ZM20.625 17.625H15C14.3479 17.6246 13.7051 17.7798 13.125 18.0778V8.25C13.125 7.75272 13.3225 7.27581 13.6742 6.92418C14.0258 6.57254 14.5027 6.375 15 6.375H20.625V17.625Z" fill="#FFC1CF" />
                                </svg>
                                }
                                descricao='Materiais no catálogo'
                            ></MetricSubCard>

                            <MetricSubCard
                                numero='2.758'
                                iconeSvg=
                                {<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.75 4.125H15C14.4377 4.12482 13.8814 4.23995 13.3654 4.46328C12.8494 4.68662 12.3847 5.0134 12 5.42344C11.6153 5.0134 11.1506 4.68662 10.6346 4.46328C10.1186 4.23995 9.56226 4.12482 9 4.125H2.25C1.95163 4.125 1.66548 4.24353 1.4545 4.4545C1.24353 4.66548 1.125 4.95163 1.125 5.25V18.75C1.125 19.0484 1.24353 19.3345 1.4545 19.5455C1.66548 19.7565 1.95163 19.875 2.25 19.875H9C9.49728 19.875 9.97419 20.0725 10.3258 20.4242C10.6775 20.7758 10.875 21.2527 10.875 21.75C10.875 22.0484 10.9935 22.3345 11.2045 22.5455C11.4155 22.7565 11.7016 22.875 12 22.875C12.2984 22.875 12.5845 22.7565 12.7955 22.5455C13.0065 22.3345 13.125 22.0484 13.125 21.75C13.125 21.2527 13.3225 20.7758 13.6742 20.4242C14.0258 20.0725 14.5027 19.875 15 19.875H21.75C22.0484 19.875 22.3345 19.7565 22.5455 19.5455C22.7565 19.3345 22.875 19.0484 22.875 18.75V5.25C22.875 4.95163 22.7565 4.66548 22.5455 4.4545C22.3345 4.24353 22.0484 4.125 21.75 4.125ZM9 17.625H3.375V6.375H9C9.49728 6.375 9.97419 6.57254 10.3258 6.92418C10.6775 7.27581 10.875 7.75272 10.875 8.25V18.0759C10.2947 17.7789 9.65194 17.6243 9 17.625ZM20.625 17.625H15C14.3479 17.6246 13.7051 17.7798 13.125 18.0778V8.25C13.125 7.75272 13.3225 7.27581 13.6742 6.92418C14.0258 6.57254 14.5027 6.375 15 6.375H20.625V17.625Z" fill="#FFC1CF" />
                                </svg>
                                }
                                descricao='Títulos cadastrados'
                            ></MetricSubCard>
                        </div>
                    </div>
                </section>
            </div>
            {/*<Footer></Footer>*/}
        </>
    );
}