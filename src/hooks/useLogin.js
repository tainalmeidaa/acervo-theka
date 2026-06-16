import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import  http  from '../api'

export function useLogin() {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const realizarLogin = async ({ email, password }) => {
        try {
            const response = await http.post('/auth/token/', {
                    username: email, email, password
            });

            localStorage.setItem('token', response.data.access);
            navigate('/PageCollection');
            alert("Tudo certo. Bem vindo(a)!");

        } catch (error) {
            alert("E-mail ou senha incorretos. Tente novamente!");
        }
    };

    return { register, handleSubmit, realizarLogin };
}