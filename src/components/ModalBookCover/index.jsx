import { useRef } from 'react';
import './ModalBookCover.styles.css';

export function ModalBookCover({ imagePreview, onImageChange }) {
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        // Simula o clique no input de arquivo escondido
        fileInputRef.current.click();
    };

    return (
        <div className="book-cover__container">
            {imagePreview ? (
                // ESTADO: Com imagem (Modo Editar ou após fazer o upload)
                <img 
                    src={imagePreview} 
                    alt="Preview da capa do livro" 
                    className="book-cover__image" 
                />
            ) : (
                // ESTADO: Vazio / Padrão (Modo Adicionar)
                <div className="book-cover__placeholder">
                    <img 
                        src="src/assets/modalbookcover/image-icon.svg" 
                        alt="Ícone de placeholder" 
                        className="book-cover__placeholder-icon"
                    />
                </div>
            )}

            {/* O botão fica sempre posicionado na parte inferior do container */}
            <button 
                type="button" 
                className="book-cover__button" 
                onClick={handleButtonClick}
            >
                {/* Substitua pelo caminho correto do seu ícone de upload/setinha */}
                {imagePreview ? 'Alterar capa' : 'Adicionar capa'}
                <img src="src/assets/modalbookcover/upload-icon.svg" alt="" />
            </button>

            {/* Input invisível que abre a galeria de arquivos do computador */}
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