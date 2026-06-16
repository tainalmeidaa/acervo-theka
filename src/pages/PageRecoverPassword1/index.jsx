import './PageRecoverPassword1.styles.css'
import { AuthLayout } from '../../components/AuthLayout/index.jsx'
import { LabelInput } from '../../components/LabelInput/index.jsx'
import { FormsTitle } from '../../components/FormsTitle/index.jsx';
import { ButtonAuthLayout } from '../../components/ButtonAuthLayout/index.jsx';
import { useRecoverPassword1 } from '../../hooks/useRecoverPassword';

export function PageRecoverPassword1() {

    const { register, handleSubmit, enviarEmail } = useRecoverPassword1(); 

    return (
        <>
            <AuthLayout>
                        <FormsTitle className='PageRecoverPassword1__form-title' title="Recuperar Senha" ></FormsTitle>
                    <LabelInput label="E-mail" type="email" placeholder="seuemail@email.com" {...register("email")} />
                    <div className='PageRecoverPassword1__Buttons'>
                        <ButtonAuthLayout nome="Voltar" para="/"/>
                        <ButtonAuthLayout nome="Enviar" para="/PageRecoverPassword2" onClick={handleSubmit(enviarEmail)} />
                    </div>
            </AuthLayout>
        </>
    );
}