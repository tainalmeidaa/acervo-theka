import './PageRecoverPassword2.styles.css'
import { AuthLayout } from '../../components/AuthLayout/index.jsx'
import { LabelInput } from '../../components/LabelInput/index.jsx'
import { FormsTitle } from '../../components/FormsTitle/index.jsx';
import { ButtonAuthLayout } from '../../components/ButtonAuthLayout/index.jsx';


export function PageRecoverPassword2() {
    return (
        <>
            <AuthLayout>
                    <FormsTitle className='PageRecoverPassword2__form-title' title="Recuperar Senha" ></FormsTitle>
                    <LabelInput label="Nova senha" type="password" placeholder="********"></LabelInput>
                    <LabelInput label="Confirmar nova senha" type="password" placeholder="********"></LabelInput>
                    <div className='PageRecoverPassword2__Buttons'>
                        <ButtonAuthLayout nome="Voltar" para="/PageCadastro"></ButtonAuthLayout>
                        <ButtonAuthLayout nome="Salvar" para="/"></ButtonAuthLayout>
                    </div>
            </AuthLayout>
        </>
    );
}

