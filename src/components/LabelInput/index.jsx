import '../LabelInput/LabelInput.styles.css'

export function LabelInput({ label, tipo = "text", placeholder, id, value, onChange }) {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className="label-input-component">
            <label htmlFor={inputId} className="titulo-label">
                {label}
            </label>
            <input 
                className="campo-de-entrada"
                type={tipo}
                placeholder={placeholder}
                id={inputId}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}