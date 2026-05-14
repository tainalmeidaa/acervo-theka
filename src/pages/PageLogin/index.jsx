import '../PageLogin/PageLogin.styles.css'
import { AuthLayout } from '../../components/AuthLayout/index.jsx'
import { LabelInput } from '../../components/LabelInput/index.jsx'

export function PageLogin() {

    return (
        <>
            <AuthLayout>
                <div className="form-login">
                    <h1 className="Form-title">Login</h1>
                    <LabelInput label="E-mail" type="name" placeholder="seuemail@email.com"></LabelInput>
                    <LabelInput label="Senha" type="password" placeholder="********"></LabelInput>
                    <div className="login-links">
                    <a href='###'>Link1</a>
                    <a href='###'>Link2</a>
                    </div>
                </div>
            </AuthLayout>
        </>
    );
}   