import '../ButtonAuthLayout/ButtonAuthLayout.styles.css'
import { useNavigate } from 'react-router-dom';

export function ButtonAuthLayout({ nome, para }) {

    const navigate = useNavigate();

    return (
            <button className='ButtonAuthLayout' onClick={() => navigate(para)} >
                {nome}
            </button>

    );
}

