import './PageRecoverPassword2.styles.css'
import { AuthLayout } from '../../components/AuthLayout/index.jsx'
import { LabelInput } from '../../components/LabelInput/index.jsx'
import { FormsTitle } from '../../components/FormsTitle/index.jsx';
import { ButtonAuthLayout } from '../../components/ButtonAuthLayout/index.jsx';
import { useRecoverPassword2 } from '../../hooks/useRecoverPassword';

export function PageRecoverPassword2() {

    const { register, handleSubmit, redefinirSenha } = useRecoverPassword2();

    return (
        <>
            <AuthLayout>
                    <FormsTitle className='PageRecoverPassword2__form-title' title="Recuperar Senha" />
                    <LabelInput label="Nova senha" type="password" placeholder="********" />
                    <LabelInput label="Confirmar nova senha" type="password" placeholder="********" />
                    <div className='PageRecoverPassword2__Buttons'>
                        <ButtonAuthLayout nome="Voltar" para="/" />
                        <ButtonAuthLayout nome="Salvar" onClick={handleSubmit(redefinirSenha)} />
                    </div>
            </AuthLayout>
        </>
    );
}

