import { useRef } from 'react';
import './BookCoverModal.styles.css';

export function BookCoverModal({ imagePreview, onImageChange, capaLivro }) {
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
                        src='src/assets/bookcovermodal/image-icon.svg'
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
                <img src="src/assets/bookcovermodal/upload-icon.svg" alt="" />
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