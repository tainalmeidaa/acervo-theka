import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export function useRegistration() {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const realizarCadastro = async ({ email, password, confirmarSenha, nomeCompleto }) => {
        if (password !== confirmarSenha) {
            alert("As senhas não coincidem! Tente novamente.");
            return;
        }

        try {
            const response = await fetch('https://thekaapideploy2.pythonanywhere.com/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: email,
                    email: email,
                    first_name: nomeCompleto,
                    password: password,
                    password_confirm: confirmarSenha
                })
            });

            const data = await response.json();

            if (!response.ok) {
                if (data.password) {
                    alert("Erro na senha: " + data.password.join(" "));
                } else {
                    alert("Erro ao realizar cadastro. Verifique os dados inseridos.");
                }
                return;
            }

            alert("Cadastro realizado com sucesso!");
            navigate('/');
        } catch (error) {
            alert("Erro ao realizar cadastro. Verifique os dados inseridos.");
        }
    };

    return { register, handleSubmit, realizarCadastro };
}