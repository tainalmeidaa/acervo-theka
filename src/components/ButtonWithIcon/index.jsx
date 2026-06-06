import '../ButtonWithIcon/ButtonWithIcon.styles.css'

export function ButtonWithIcon ( {nome, Icon, onClick} ) {
    return(
        <button 
            className='button-with-icon'
            type="button" 
            onClick={onClick}
        >
            {nome}
            {Icon && <Icon size={20}/>}
        </button>
    );
}