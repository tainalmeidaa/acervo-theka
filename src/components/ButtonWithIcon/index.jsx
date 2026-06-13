import '../ButtonWithIcon/ButtonWithIcon.styles.css'

export function ButtonWithIcon ( {nome, Icon, bg_color, onClick} ) {
    return(
        <button 
            className='button-with-icon'
            type="button" 
            onClick={onClick}
            style = {{backgroundColor: bg_color }}
        >
            {nome}
            {Icon && <Icon size={20}/>}
        </button>
    );
}