import '../PageContact/PageContact.styles.css'
import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { LabelInput } from '../../components/LabelInput/index.jsx'
import { ButtonAuthLayout } from '../../components/ButtonAuthLayout/index.jsx';


export function PageContact() {

    // No mapa, o botão referente as unidades começa com o 'Natal Shopping' selecionado
    const [activeUnit, setActiveUnit] = useState('natal');

    return (
        <>
        <Navbar></Navbar>
        <main className='page_contact'>
            {/* ---------- Container para Título da página, Mapa e mais informações, e Formulário ---------- */}
            <section className="contact">
                <h1 className="contact__title">Contato</h1>
                <div className="contact__content">

                    {/* ----- Seção com a localização das unidades, botões para navegar e a descrição do endereço ----- */}
                    <div className="contact__map-area">
                        <div className="contact__map">
                            <img src="src/assets/pagecontact/map.svg"></img>
                        </div>

                        {/* Seção para os botões que navegam entre as unidades no mapa */}
                        <div className="contact__units">
                            <button className={`contact__unit-button ${activeUnit === 'natal' ? 'active' : ''}`}
                                onClick={() => setActiveUnit('natal')}>
                                Unidades Natal Shopping
                            </button>

                            <button className={`contact__unit-button ${activeUnit === 'midway' ? 'active' : ''}`}
                                onClick={() => setActiveUnit('midway')}>
                                Unidades Midway
                            </button>
                        </div>

                        <p className="contact__address">
                            Avenida Senador Salgado Filho, 2234, Av. das Brancas Dunas, 47 - Candelária, Natal - RN, 59064-900
                        </p>
                    </div>

                    {/* ---------- Campo do formulário ---------- */}
                    <form className="contact__form">
                        <h2 className="contact__form-title">
                            Vem falar com a gente!
                        </h2>

                        <LabelInput
                            label="Seu nome"
                            placeholder="João Maria"
                        />

                        <LabelInput
                            label="Idade"
                            placeholder="23"
                        />

                        <LabelInput
                            label="E-mail"
                            placeholder="joao.maria@gmail.com"
                        />

                        <LabelInput
                            label="Mensagem"
                            placeholder="Escreva a sua mensagem."
                        />

                        {/* ----- Botões do formulário ---- */}
                        <div className="contact__actions">
                            <button className="contact__cancel-button">
                                Cancelar
                            </button>

                            <button className="contact__submit-button">
                                Enviar
                                <img src='src/assets/pagecontact/button_icon.svg'></img>
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
        <Footer></Footer>
    </>
    );
}