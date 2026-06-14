import '../PageHome/PageHome.styles.css'
import { useState } from 'react';
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ButtonAuthLayout } from '../../components/ButtonAuthLayout';
import { ButtonPageHome } from '../../components/ButtonPageHome';
import { MetricCard } from '../../components/MetricCard';
import { MetricSubCard } from '../../components/MetricSubCard';
import IconSubCar1 from "../../assets/pagehome/user-icon.svg?react";
import IconSubCar2 from '../../assets/pagehome/book-icon.svg?react';
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
            <Navbar></Navbar>
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
                                descricao='Usuários cadastrados'
                                Icon={IconSubCar1}
                                bg_color='var(--rosa500)'
                                tx_color='var(--rosa200)'
                            ></MetricSubCard>

                            <MetricSubCard
                                numero='3.982'
                                descricao='Materiais no catálogo'
                                Icon={IconSubCar2}
                                bg_color='var(--rosa500)'
                                tx_color='var(--rosa200)'
                            ></MetricSubCard>

                            <MetricSubCard
                                numero='2.758'
                                descricao='Títulos cadastrados'
                                Icon={IconSubCar2}
                                bg_color='var(--rosa500)'
                                tx_color='var(--rosa200)'
                            ></MetricSubCard>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </>
    );
}