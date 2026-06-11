import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import http from '../api';

export function useRegistration() {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const realizarCadastro = async ({ email, password, confirmarSenha, nomeCompleto }) => {
        if (password !== confirmarSenha) {
            alert("As senhas não são iguais! Tente novamente.");
            return;
        }

        try {
            await http.post('/users/', {
                username: email,
                email: email,
                first_name: nomeCompleto,
                password: password,
                password_confirm: confirmarSenha
            });

            alert("Cadastro realizado com sucesso!");
            navigate('/');

        } catch (error) {

            if (error.response?.data?.password) {
                if (data.password) {
                    alert("Erro na senha: " + error.response.data.password.join(" "));
                } else {
                    alert("Erro ao realizar cadastro. Verifique os dados inseridos.");
                }
            }

        }
    };

    return { register, handleSubmit, realizarCadastro };
}