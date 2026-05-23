import '../PageRegistration/PageRegistration.styles.css'

import { AuthLayout } from '../../components/AuthLayout/index.jsx'
import { LabelInput } from '../../components/LabelInput/index.jsx'
import { FormsTitle } from '../../components/FormsTitle/index.jsx';
import { ButtonAuthLayout } from '../../components/ButtonAuthLayout/index.jsx';

export function PageRegistration() {
    return (
        <>
            <AuthLayout>
                    <FormsTitle className='PageRegistration__form-title' title="Cadastro" ></FormsTitle>
                    <LabelInput label="Nome completo" type="name" placeholder="Seu nome completo"></LabelInput>
                    <LabelInput label="Email" type="string" placeholder="seuemail@email.com"></LabelInput>
                    <LabelInput label="Senha" type="password" placeholder="********"></LabelInput>
                    <LabelInput label="Confirmar senha" type="password" placeholder="********"></LabelInput>
                    <div className='PageRegistration__Buttons'>
                        <ButtonAuthLayout nome="Cancelar" para="/"></ButtonAuthLayout>
                        <ButtonAuthLayout nome="Salvar" para="/"></ButtonAuthLayout>
                    </div>
            </AuthLayout>
        </>
    );
}

