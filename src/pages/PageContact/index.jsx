import '../PageContact/PageContact.styles.css'
import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { LabelInput } from '../../components/LabelInput/index.jsx'
import { ButtonDefault } from '../../components/ButtonDefault/index.jsx';
import { ButtonWithIcon } from '../../components/ButtonWithIcon/index.jsx';
import IconSend from "../../assets/pagecontact/button_icon.svg?react";

export function PageContact() {

    // ----- objeto com dados das duas unidades -----//
    const unitsData = {
        natal: {
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.095953912738!2d-35.21424572609073!3d-5.842098757573681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ff7f3d2f608f%3A0xd58db53fc452bd36!2sNatal%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1781394071388!5m2!1spt-BR!2sbr",
            address: "Avenida Senador Salgado Filho, 2234, Av. das Brancas Dunas, 47 - Candelária, Natal - RN, 59064-900"
        },
        midway: {
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.3138136318657!2d-35.20879912609112!3d-5.811281357311231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2fffa55a2be71%3A0xebf15047f9f8e07c!2sMidway%20Mall!5e0!3m2!1spt-BR!2sbr!4v1781394251191!5m2!1spt-BR!2sbr",
            address: "Av. das Bananeiras, 5101 - Cidade da Esperança, Natal - RN, 59024-001"
        }
    }

    // ----- No mapa, o botão referente as unidades começa com o 'Natal Shopping' selecionado ----- //
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
                                <iframe
                                    src={unitsData[activeUnit].mapSrc}
                                    style={{ border: 10 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Mapa da unidade ${activeUnit}`}
                                ></iframe>
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
                                 {unitsData[activeUnit].address} {/* --- o endereço de acordo com a localização selecionada --- */}
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
                                <ButtonDefault className="contact__cancel-button" nome='Cancelar' />
                                <ButtonWithIcon className="contact__submit-button" nome='Enviar' Icon={IconSend} bg_color='var(--rosa600)' />
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    );
}