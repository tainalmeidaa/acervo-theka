import '../PageRegistration/PageRegistration.styles.css'
import { AuthLayout } from '../../components/AuthLayout/index.jsx'
import { LabelInput } from '../../components/LabelInput/index.jsx'
import { FormsTitle } from '../../components/FormsTitle/index.jsx';
import { ButtonAuthLayout } from '../../components/ButtonAuthLayout/index.jsx';

import { useRegistration } from '../../hooks/useRegistration';

export function PageRegistration() {

    const { register, handleSubmit, realizarCadastro } = useRegistration();

    return (
        <>
            <AuthLayout>
                    <FormsTitle className='PageRegistration__form-title' title="Cadastro" ></FormsTitle>
                    <LabelInput label="Nome completo" type="text" placeholder="Seu nome completo" {...register("nomeCompleto")}/>
                    <LabelInput label="Email" type="email" placeholder="seuemail@email.com" {...register("email")}></LabelInput >
                    <LabelInput label="Senha" type="password" placeholder="********" {...register("password")}></LabelInput>
                    <LabelInput label="Confirmar senha" type="password" placeholder="********" {...register("confirmarSenha")}></LabelInput>
                    <div className='PageRegistration__Buttons'>
                        <ButtonAuthLayout nome="Cancelar" para="/"></ButtonAuthLayout>
                        <ButtonAuthLayout nome="Salvar" onClick={handleSubmit(realizarCadastro)}></ButtonAuthLayout>
                    </div>
            </AuthLayout>
        </>
    );
}

