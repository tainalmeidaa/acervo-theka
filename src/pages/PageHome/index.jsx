import '../PageHome/PageHome.styles.css'
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ButtonAuthLayout } from '../../components/ButtonAuthLayout';

export function PageHome() {
    return(
        <>
            <Navbar></Navbar>
            <div className='pagehome__content'>
                <div className='hero__banner'>
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
                    
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}