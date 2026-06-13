//  ------- Arquivo de Estilo -------
import '../ModalMaterialForm/ModalMaterialForm.styles.css';

// -------- Dependências ------
import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

// -------- Componentes -----------
import { BookCoverModal } from "../../components/BookCoverModal";
import { LabelInput } from '../../components/LabelInput';
import { TextAreaField } from "../../components/TextAreaField";
import { ButtonDefault } from '../../components/ButtonDefault';
import { ButtonWithIcon } from '../../components/ButtonWithIcon';

// ---------- Ícones SVG -----------
import IconSave from '../../assets/modal-material-form/save-icon.svg?react';
import IconTrash from '../../assets/modal-material-form/trash-icon.svg?react';

// ---------- Objeto para resetar o formulário ---------
const estadoInicialForm = {
    titulo: '',
    paginas: '',
    isbn: '',
    autor: '',
    ano: '',
    editora: '',
    resumo: ''
};

export function ModalMaterialForm({ isOpen, onClose, materialSelecionado }) {
    // -------- Estado inicial do formulário ---------
    const [form, setForm] = useState(estadoInicialForm);
    
    // -------- Estados para gerenciar arquivo de imagem da capa -----
    const [capaArquivo, setCapaArquivo] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    //   Faz o monitoramento da abertura do modal:
    // - Carrega o modal com dados salvos para fazer a Edição do material; ou
    // - Carrega o modal limpo para fazer o Cadastro do material

    useEffect(() => {
        if (!isOpen) return;

        if (materialSelecionado) {
            setForm({
                titulo: materialSelecionado.titulo || '',
                paginas: materialSelecionado.numero_paginas || '',
                isbn: materialSelecionado.isbn || '',
                autor: materialSelecionado.autor || '',
                ano: materialSelecionado.ano_publicacao || '',
                editora: materialSelecionado.editora || '',
                resumo: materialSelecionado.resumo || ''
            });
            setImagePreview(materialSelecionado.capa || null);
            setCapaArquivo(null);
        } else {
            setForm(estadoInicialForm);
            setImagePreview(null);
            setCapaArquivo(null);
        }
    }, [isOpen, materialSelecionado]);

    // --------- Atualiza os campos do formulário dinamicamente ---------
    const handleInputChange = (campo, valor) => {
        setForm(prev => ({ ...prev, [campo]: valor }));
    };

    // --------- Gerenciador do upload da capa do livro -----------
    const handleImageChange = (event) => {
        const arquivoSubido = event.target.files[0];
        if (arquivoSubido) {
            setCapaArquivo(arquivoSubido);
            setImagePreview(URL.createObjectURL(arquivoSubido));
        }
    };

    // -------------Ação do botão deletar --------------
    const handleDelete = () => {
        if (window.confirm(`Tem certeza que quer deletar "${form.titulo}"?`)) {
            alert("Material deletado!");
            onClose();
        }
    };

    return (
        <Modal show={isOpen} onHide={onClose} centered size="xl">
            <Modal.Header>
                <Modal.Title className="modal-title">
                    {/* ------ Muda o título do modal caso seja para adicionar material ou editar ---------- */}
                    {materialSelecionado ? "Editar material" : "Adicionar material ao catálogo"}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="modaladd_body-container">
                    {/* --------- Campo com a capa do livro --------- */}
                    <div className="modaladd_book-container">
                        <BookCoverModal imagePreview={imagePreview} onImageChange={handleImageChange} capaOriginal={materialSelecionado?.capa} />
                    </div>

                    {/* --------- Formulario para adicionar ou editar material ---------*/}
                    <form className="modaladd_form-grid">
                        <div className="bloco-titulo">
                            <LabelInput 
                                label='Título no material:' 
                                placeholder='Inserir o título do material' 
                                value={form.titulo}
                                onChange={(e) => handleInputChange('titulo', e.target.value)}
                            />
                        </div>

                        <div className="bloco-paginas">
                            <LabelInput 
                                label='Número de páginas' 
                                placeholder='000' 
                                value={form.paginas}
                                onChange={(e) => handleInputChange('paginas', e.target.value)}
                            />
                        </div>

                        <div className="bloco-isbn">
                            <LabelInput 
                                label='ISBN' 
                                placeholder='xxxxxxx' 
                                value={form.isbn}
                                onChange={(e) => handleInputChange('isbn', e.target.value)}
                            />
                        </div>

                        <div className="bloco-autor">
                            <LabelInput 
                                label='Autor:' 
                                placeholder='Machado de Assis' 
                                value={form.autor}
                                onChange={(e) => handleInputChange('autor', e.target.value)}
                            />
                        </div>

                        <div className="bloco-ano">
                            <LabelInput 
                                label='Ano de publicação' 
                                placeholder='2016' 
                                value={form.ano}
                                onChange={(e) => handleInputChange('ano', e.target.value)}
                            />
                        </div>

                        <div className="bloco-editora">
                            <LabelInput 
                                label='Editora' 
                                placeholder='Selecionar' 
                                value={form.editora}
                                onChange={(e) => handleInputChange('editora', e.target.value)}
                            />
                        </div>

                        <div className="bloco-resumo">
                            <TextAreaField 
                                label='Resumo do material:' 
                                placeholder='Inserir um breve resumo do material.' 
                                value={form.resumo}
                                onChange={(e) => handleInputChange('resumo', e.target.value)}
                            />
                        </div>
                    </form>
                </div>
            </Modal.Body>

            <Modal.Footer>

                {/* ----- Caso o material tenha sido adicionado, o modal ganha o botão 'Deletar' ----- */}
                {materialSelecionado && (
                    <div className="modaladd_btn-delete">
                        <ButtonWithIcon nome="Deletar" Icon={IconTrash} bg_color={'var(--rosa600)'} onClick={handleDelete} className="btn-deletar" />
                    </div>
                )}
                <ButtonDefault nome="Cancelar" onClick={onClose} />
                <ButtonWithIcon nome="Salvar" Icon={IconSave} bg_color={'var(--rosa600)'} onClick={onClose} />
            </Modal.Footer>
        </Modal>
    );
}