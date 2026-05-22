import '../Navbar/navbar.styles.css'

export function Navbar() {
    return (
        <nav className='navbar'>
                <img className='navbar-logo' src='src/assets/navbar/navbar-logo.svg' alt='Logo Navbar Theka' />
                    <ul className="navbar-list">
                        <li><button className='navbar-link'>Início</button></li>
                        <li><button className='navbar-link'>Acervo</button></li>
                        <li><button className='navbar-link'>Sobre nós</button></li>
                        <li><button className='navbar-link'>Contato</button></li>
                    </ul>
                    <button className='navbar-logout'>
                        <img className='navbar-sair' src='src/assets/navbar/navbar-sair-icon.svg' alt='Ícone de perfil/saída' />
                    </button>
        </nav>
    );
}