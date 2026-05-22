import './PageRecoverPassword1.styles.css'
import { AuthLayout } from '../../components/AuthLayout/index.jsx'
import { LabelInput } from '../../components/LabelInput/index.jsx'
import { FormsTitle } from '../../components/FormsTitle/index.jsx';
import { ButtonAuthLayout } from '../../components/ButtonAuthLayout/index.jsx';

export function PageRecoverPassword1() {
    return (
        <>
            <AuthLayout>
                        <FormsTitle className='PageRecoverPassword1__form-title' title="Recuperar Senha" ></FormsTitle>
                    <LabelInput label="E-mail" type="string" placeholder="seuemail@email.com"></LabelInput>
                    <div className='PageRecoverPassword1__Buttons'>
                        <ButtonAuthLayout nome="Voltar" para="/"></ButtonAuthLayout>
                        <ButtonAuthLayout nome="Enviar" para="/PageRecoverPassword2"></ButtonAuthLayout>
                    </div>
            </AuthLayout>
        </>
    );
}