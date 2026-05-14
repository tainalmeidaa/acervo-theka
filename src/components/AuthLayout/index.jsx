import '../AuthLayout/AuthLayout.styles.css'
export function AuthLayout({ children }) {

    return (
        <div className="auth-container">
            <section className="sideart-container">
                <div className = 'mascote-container'>
                    <img src='src\assets\authlayout\mascote.svg' alt="Mascote"></img>
                </div>
                <div className = 'logo-container'>
                    <img src='src\assets\authlayout\logo-laranja.svg' alt="Logo"></img>
                </div>
            </section>
            <form className='form-container'>
                { children }
            </form>
        </div>

    );
}   