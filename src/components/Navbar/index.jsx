import '../Navbar/navbar.styles.css'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';

export function Navbar() {

    // Navegar entre as páginas
    const navigate = useNavigate();

    // Estado para controlar o Menu mobile, verificando se está aberto ou fechado
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const handleClose = () => setShowMobileMenu(false);
    const handleShow = () => setShowMobileMenu(true);

    return (
        <>
            {/* ----------- Navbar Desktop ------------ */}
            <nav className='navbar 
                    d-flex 
                    justify-content-center 
                    align-items-center 
                    w-100'>

                <button className='navbar-logo-btn' onClick={handleShow}>
                    <img className='navbar-logo-icon' src='src/assets/navbar/navbar-logo.svg' alt='Logo Navbar Theka' />
                </button>

                {/* ----- Logo 'Theka' fica escondida na versão desktop ---- */}
                <div className='navbar-logo-theka d-lg-none'>
                    <img className='navbar-logo-theka' src='src/assets/navbar/logo-theka.svg'
                        alt="TheKa Texto"
                        className="logo-text 
                        d-lg-none" /* --- Esconde a imagem da logo --- */
                    />
                </div>


                <div className='navbar-menu 
                        d-none 
                        d-lg-flex 
                        align-items-center'
                >
                    <ul className="navbar-list 
                            d-flex 
                            align-items-center 
                            m-0 
                            p-0"
                    >
                        <li><button className='navbar-link' onClick={() => navigate('/PageHome')}>Início</button></li>
                        <li><button className='navbar-link' onClick={() => navigate('/PageCollection')} >Acervo</button></li>
                        <li><button className='navbar-link' onClick={() => navigate('/PageAboutUs')}>Sobre nós</button></li>
                        <li><button className='navbar-link' onClick={() => navigate('/PageContact')}>Contato</button></li>
                    </ul>

                    <button className='navbar-logout-btn'>
                        <img className='navbar-logo-logout' src='src/assets/navbar/navbar-sair-icon.svg' alt='Ícone de perfil ou saída' />
                    </button>
                </div>


            </nav>

            {/* --------- Navbar Mobile --------- */}

            <Offcanvas show={showMobileMenu} onHide={handleClose} placement="start" className="navbar-mobile_sidebar">
                <Offcanvas.Header closeButton className="px-4 pt-4">
                    <Offcanvas.Title>
                        <img
                            src='src/assets/navbar/logo-theka.svg'
                            alt="TheKa Texto"
                            className="logo-text 
                            ms-2 
                            d-lg-none"
                        />
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body className="px-4 
                                    d-flex 
                                    flex-column 
                                    justify-content-between"
                >
                    <ul className="navbar-mobile_list">
                        <li><button className='navbar-mobile-link' onClick={handleClose} onClick={() => navigate('/PageHome')}>Início</button></li>
                        <li><button className='navbar-mobile-link' onClick={handleClose} onClick={() => navigate('/PageCollection')}>Acervo</button></li>
                        <li><button className='navbar-mobile-link' onClick={handleClose} onClick={() => navigate('/PageAboutUs')}>Sobre nós</button></li>
                        <li><button className='navbar-mobile-link' onClick={handleClose} onClick={() => navigate('/PageContact')}>Contato</button></li>
                    </ul>

                    <div className="navbar-mobile_text-footer">
                        Protótipo desenvolvido por EJECT
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}