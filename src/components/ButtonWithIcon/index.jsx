import '../ButtonWithIcon/ButtonWithIcon.styles.css'

export function ButtonWithIcon ( {nome, Icon, bg_color, onClick, type = "button"} ) {
    return(
        <button 
            className='button-with-icon'
            type={type} 
            onClick={onClick}
            style = {{backgroundColor: bg_color }}
        >
            {nome}
            {Icon && <Icon size={20}/>}
        </button>
    );
}