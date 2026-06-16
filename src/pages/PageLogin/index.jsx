import './PageLogin.styles.css'
import { AuthLayout } from '../../components/AuthLayout/index.jsx'
import { LabelInput } from '../../components/LabelInput/index.jsx'
import { FormsTitle } from '../../components/FormsTitle/index.jsx';
import { ButtonAuthLayout } from '../../components/ButtonAuthLayout/index.jsx';

import { useLogin } from '../../hooks/useLogin';

export function PageLogin() {

    const { register, handleSubmit, realizarLogin } = useLogin();

    return (
        <>
            <AuthLayout>
                <FormsTitle className='login__form-title' title="Login"/>
                <LabelInput label="E-mail" type="email" placeholder="seuemail@email.com" {...register("email")}/>
                <LabelInput label="Senha" type="password" placeholder="********" {...register("password")}/>
                <div className="login__links">
                    <a href='PageRecoverPassword1'>Esqueceu a senha?</a>
                    <a href='pageRegistration'>Ainda não tem cadastro?</a>
                </div>
                <div className='ButtonAuthLayout__container'>
                    <ButtonAuthLayout nome="Enviar" type="submit"

                        onClick={(e) => {
                            e?.preventDefault();
                            handleSubmit(realizarLogin)();
                        }}></ButtonAuthLayout>
                </div>
            </AuthLayout >
        </>
    );
}   
