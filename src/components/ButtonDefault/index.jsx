import '../ButtonDefault/ButtonDefault.styles.css'

export function ButtonDefault ( {nome, onClick} ) {
    return(
        <button 
            className='button-default'
            type="button" 
            onClick={onClick}
        >   {nome}
        </button>
    );
}