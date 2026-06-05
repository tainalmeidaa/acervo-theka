import '../LabelInput/LabelInput.styles.css'

export function LabelInput({ label, tipo = "text", placeholder, id, value, onChange, ...props}) {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className="labelinput__container">
            <label 
                className="labelinput__titulo" 
                htmlFor={inputId} >
                {label}
            </label>
            <input 
                className="labelinput__campoentrada"
                type={tipo}
                placeholder={placeholder}
                id={inputId}
                name={inputId}
                value={value}
                onChange={onChange}
                {...props}
            />
        </div>
    );
}