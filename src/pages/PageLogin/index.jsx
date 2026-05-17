import './PageLogin.styles.css'
import { AuthLayout } from '../../components/AuthLayout/index.jsx'
import { LabelInput } from '../../components/LabelInput/index.jsx'
import { FormsTitle } from '../../components/FormsTitle/index.jsx';
import { ButtonAuthLayout } from '../../components/ButtonAuthLayout/index.jsx';

export function PageLogin() {

    return (
        <>
            <AuthLayout>
                    <FormsTitle className='login__form-title' title="Login"></FormsTitle>
                    <LabelInput label="E-mail" type="name" placeholder="seuemail@email.com"></LabelInput>
                    <LabelInput label="Senha" type="password" placeholder="********"></LabelInput>
                    <div className="login__links">
                        <a href='PageRecoverPassword1'>Esqueceu a senha?</a>
                        <a href='pagecadastro'>Ainda não tem cadastro?</a>
                    </div>
                    <div className='ButtonAuthLayout__container'>
                        <ButtonAuthLayout nome="Enviar" para="/PageCadastro"></ButtonAuthLayout>
                    </div>
            </AuthLayout >
        </>
    );
}   