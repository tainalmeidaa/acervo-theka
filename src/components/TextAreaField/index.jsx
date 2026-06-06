import '../../components/TextAreaField/TextAreaField.styles.css'

export function TextAreaField({ id, label, placeholder, ...props}) {

    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className="textarea-field__container">
            <label 
                className="textarea-field__label" 
                htmlFor={inputId}>{label}</label>
            <textarea 
                className="textarea-field__input" 
                placeholder={placeholder}
                id={inputId}
                name={inputId}
                {...props}
            />
        </div>
    );
}