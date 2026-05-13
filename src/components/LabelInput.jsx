export function LabelInput({ label, tipo, placeholder }) {
    return (
        <div className='label-input-container'>
            <h2>{label}</h2>
            <input
                type={tipo}
                placeholder={placeholder}
            />
        </div>
    );
}
