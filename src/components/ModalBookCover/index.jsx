import { useRef } from 'react';
import './ModalBookCover.styles.css';

export function ModalBookCover({ imagePreview, onImageChange }) {
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="book-cover__container">
            {imagePreview ? (
                <img 
                    src={imagePreview} 
                    alt="Preview da capa do livro" 
                    className="book-cover__image" 
                />
            ) : (
                <div className="book-cover__placeholder">
                    <img 
                        src="src/assets/modalbookcover/image-icon.svg" 
                        alt="Ícone de placeholder" 
                        className="book-cover__placeholder-icon"
                    />
                </div>
            )}

            <button 
                type="button" 
                className="book-cover__button" 
                onClick={handleButtonClick}
            >

                {imagePreview ? 'Alterar capa' : 'Adicionar capa'}
                <img src="src/assets/modalbookcover/upload-icon.svg" alt="" />
            </button>

            <input 
                type="file" 
                accept="image/*" 
                ref={fileInputRef} 
                style={{ display: 'none' }} 
                onChange={onImageChange} 
            />
        </div>
    );
}