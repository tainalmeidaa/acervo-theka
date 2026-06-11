import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import http from '../api';

export function useRecoverPassword1() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const enviarEmail = async ({ email }) => {
        try {
            await http.post('/auth/password/reset/', { email });
            alert("E-mail de recuperação enviado com sucesso!");
            navigate('/PageRecoverPassword2');
        } catch (error) {
            alert("Erro ao enviar e-mail. Verifique e tente novamente.");
        }
    };

    return { register, handleSubmit, enviarEmail };
}

export function useRecoverPassword2() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const redefinirSenha = async ({ novaSenha, confirmarSenha }) => {
        if (novaSenha !== confirmarSenha) {
            alert("As senhas não coincidem! Tente novamente.");
            return;
        }

        const params = new URLSearchParams(window.location.search);
        const uid = params.get('uid');
        const token = params.get('token');

        if (!uid || !token) {
            alert("Link inválido ou expirado. Solicite um novo e-mail.");
            return;
        }

        try {
            await http.post('/auth/password/reset/confirm/', {
                uid,
                token,
                new_password: novaSenha,
                new_password_confirm: confirmarSenha
            });
            alert("Senha redefinida com sucesso!");
            navigate('/');
        } catch (error) {
            alert("Erro ao redefinir senha. O link pode ter expirado.");
        }
    };

    return { register, handleSubmit, redefinirSenha };
}