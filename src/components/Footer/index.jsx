import '../Footer/Footer.styles.css'


export function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <div className='logo-e-descricao'>
                    <img className='logo-descritiva' src='src/assets/footer/footer-logo.svg'></img>
                    <p className='descricao-logo'>Aventuras literárias</p>
                </div>
                <div className='footer-infomacoes'>

                    <div className='infomacoes-contatos'>
                        <h3 className='titulo-informacoes'>Contato</h3>
                        <div className='contato-item'>
                            <img src='src/assets/footer/contato-icon.svg' alt='Ícone do contato'></img>
                            <span>(84) 9 9999-2222</span>
                        </div>
                        <div className='contato-item'>
                            <img src='src/assets/footer/site-icon.svg' alt='Ícone do site'></img>
                            <span>www.theka.com.br</span>
                        </div>
                        <div className='contato-item'>
                            <img src='src/assets/footer/localizacao-icon.svg' alt='Ícone da localização'></img>
                            <span>Natal, RN</span>
                        </div>
                    </div>

                    <div className='informacoes-redes-sociais'>
                        <h3 className='titulo-informacoes'>Redes sociais</h3>
                        <div className='redes-sociais-item'>
                            <img src='src/assets/footer/instagram-icon.svg' alt='ícone do Instagram'></img>
                            <span>@theka.biblioteca</span>
                        </div>
                        <div className='redes-sociais-item'>
                            <img src='src/assets/footer/tiktok-icon.svg' alt='Ícone do Tiktok'></img>
                            <span>@theka.biblioteca</span>
                        </div>
                        <div className='redes-sociais-item'>
                            <img src='src/assets/footer/x-icon.svg' alt='ícone do X'></img>
                            <span>@theka.biblioteca</span>
                        </div>
                    </div>

                    <div className='informacoes-ajuda'>
                        <h3 className='titulo-informacoes'>Ajuda</h3>
                        <div className='ajuda-item'>
                            <img src='src/assets/footer/central-ajuda-icon.svg' alt='Ícone da central de ajuda'></img>
                            <span>Central de ajuda</span>
                        </div>
                        <div className='ajuda-item'>
                            <img src='src/assets/footer/faq-icon.svg' alt='Ícone de perguntas frequentes'></img>
                            <span>FAQ</span>
                        </div>

                    </div>
                </div>
            </div>
            <p className='footer-creditos'>Mockup desenvolvido por EJECT</p>
        </footer>
    );
}