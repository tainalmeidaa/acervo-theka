import '../PageHome/PageHome.styles.css'
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ButtonAuthLayout } from '../../components/ButtonAuthLayout';

export function PageHome() {
    return(
        <>
            <Navbar></Navbar>
            <div className='pagehome__content'>

                <section className='hero__banner'>
                    <div className='info__banner'>
                        <div className='logo-texto__banner'>
                            <img className='logo__banner' src='src/assets/pagehome/logo-banner.svg' width={226} height={62}></img>
                            <h3>Desvende o mundo através dos livros.</h3>
                        </div>
                        <div className='botao__banner'>
                            <ButtonAuthLayout nome="Acervo" para=""></ButtonAuthLayout>
                        </div>
                    </div>
                    <div className='mascote__banner'>
                        <img src='src/assets/pagehome/home-mascote.svg' alt='Imagem do mascote no Hero Banner'></img>
                    </div>
                </section>
                <section className='spotlight__books'>
                    <div className='info__spotlight__books'>
                        <img src='src/assets/pagehome/arrow-circle-right.svg' width={68} height={68}></img>
                        <h1>Nós te ajudamos a conhecer os livros de uma forma diferente.</h1>
                        <p>Todo mês a gente separa livros especiais para você se inspirar, aprender ou se divertir. Pode ser novidade, clássico ou surpresa, sempre tem uma leitura esperando por você!</p>
                    </div>
                    <div className='spotlight__cardbooks'>

                    </div>
                </section>
                <section className='our__statistics'>
                    <h1>Nossas estatísticas</h1>
                </section>
                
            </div>
            <Footer></Footer>
        </>
    );
}