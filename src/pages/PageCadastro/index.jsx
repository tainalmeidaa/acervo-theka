import '../PageCadastro/PageCadastro.styles.css'

import { AuthLayout } from '../../components/AuthLayout/index.jsx'
import { LabelInput } from '../../components/LabelInput/index.jsx'
import { FormsTitle } from '../../components/FormsTitle/index.jsx';
import { ButtonAuthLayout } from '../../components/ButtonAuthLayout/index.jsx';

export function PageCadastro() {
    return (
        <>
            <AuthLayout>
                    <FormsTitle className='PageCadastro__form-title' title="Cadastro" ></FormsTitle>
                    <LabelInput label="Nome completo" type="name" placeholder="Seu nome completo"></LabelInput>
                    <LabelInput label="Email" type="string" placeholder="seuemail@email.com"></LabelInput>
                    <LabelInput label="Senha" type="password" placeholder="********"></LabelInput>
                    <LabelInput label="Confirmar senha" type="password" placeholder="********"></LabelInput>
                    <div className='PageCadastro__Buttons'>
                        <ButtonAuthLayout nome="Cancelar" para="/"></ButtonAuthLayout>
                        <ButtonAuthLayout nome="Salvar" para="/"></ButtonAuthLayout>
                    </div>
            </AuthLayout>
        </>
    );
}

