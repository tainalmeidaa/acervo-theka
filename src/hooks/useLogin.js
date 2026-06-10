import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export function useLogin() {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const realizarLogin = async ({ email, password }) => {
        try {
            const response = await fetch('https://thekaapideploy2.pythonanywhere.com/auth/token/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: email, email, password
                })
            });

            const data = await response.json();
            localStorage.setItem('token', data.access);
            navigate('/PageCollection');
            alert("Tudo certo. Bem vindo(a)!");

        } catch (error) {
            alert("E-mail ou senha incorretos. Tente novamente!");
        }
    };

    return { register, handleSubmit, realizarLogin };
}