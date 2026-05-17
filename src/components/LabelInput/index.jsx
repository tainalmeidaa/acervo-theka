import '../LabelInput/LabelInput.styles.css'

export function LabelInput({ label, tipo = "text", placeholder, id, value, onChange }) {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className="labelinput__container">
            <label htmlFor={inputId} className="labelinput__titulo">
                {label}
            </label>
            <input 
                className="labelinput__campoentrada"
                type={tipo}
                placeholder={placeholder}
                id={inputId}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}