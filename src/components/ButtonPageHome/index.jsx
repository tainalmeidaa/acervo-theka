import '../ButtonPageHome/ButtonPageHome.styles.css'
import { useNavigate } from 'react-router-dom';

export function ButtonPageHome({nome, para}) {
    
    const navigate = useNavigate();

    return (
            <button className='ButtonPageHome' onClick={() => navigate(para)} >
                {nome}
                <img src='src/assets/pagehome/arrow-circle-right.svg' width={24} height={24}></img>
            </button>

    );

}