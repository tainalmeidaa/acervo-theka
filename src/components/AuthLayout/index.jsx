import '../AuthLayout/AuthLayout.styles.css'

export function AuthLayout({ children }) {

    return (
        <div className="authlayout__container">
            <section className="sideart__container">
                <div className='sideart__mascote-container'>
                    <img className='ilustracao-mascote' src='src\assets\authlayout\mascote.svg' alt="Mascote"></img>
                </div>
                <div className='sideart__logo-container'>
                    <img src='src\assets\authlayout\logo-laranja.svg' alt="Logo"></img>
                </div>
            </section>
            <form className='form__container'>
                {children}
            </form>
        </div>

    );
}   