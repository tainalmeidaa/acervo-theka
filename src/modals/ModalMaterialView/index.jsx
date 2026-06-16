import { Modal } from 'react-bootstrap';
import { ButtonWithIcon } from '../../components/ButtonWithIcon';
import IconEdit from '../../assets/modal-material-view/edit.svg?react';

export function ModalMaterialView({ isOpen, onClose, material, onEditClick }) {
    if (!material) return null;

    return (
        <Modal
            show={isOpen}
            onHide={onClose}
            centered
        >

            <Modal.Body
                className="material-view p-0 overflow-hidden"
                style={{
                    borderRadius: '10px',
                    backgroundColor: 'var(--branco)',
                    width: '700px',
                    margin: '0 auto',
                    height: '450px'
                }}
            >

                {/* ---- botão fechar modal---- */}
                <button
                    type="button"
                    className="btn-close position-absolute top-0 end-0 m-3 z-3"
                    onClick={onClose}
                    aria-label="Close"
                ></button>

                <div className="material-view__inner d-flex h-100" style={{borderRadius: '20px'}}>

                    {/* ----- Capa do livro ----- */}
                    <div
                        className="material-view_capa flex-shrink-0"
                        /*style={{
                            width: '40%',
                            height: '100%'
                        }}*/
                    >
                        <img
                            src={material.capa}
                            alt={material.titulo}
                            className="w-100 h-100"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>

                    {/* ----- Informações do livro ----- */}
                    <div
                        className="material-view_info bg-white p-4 p-md-5 d-flex flex-column justify-content-between"
                        style={{
                            width: '60%',
                            height: '100%'
                        }}
                    >
                        <div className="w-100" style={{ textAlign: 'left' }}>
                            <h2 className=" modal-view_titulo" style={{ fontSize: '1.8rem', fontWeight: '800' }}>
                                {material.titulo}
                            </h2>

                            <p className="text-secondary fw-semibold mb-3" style={{ fontSize: '1rem', color: 'var(--cinza600)' }}>
                                {material.autor}, {material.ano_publicacao}
                            </p>

                            <div
                                className="scrollbar"
                                style={{
                                    maxHeight: '130px',
                                    overflowY: 'auto',
                                    paddingRight: '10px',
                                    marginBottom: '15px'
                                }}

                            >
                                <p className="text-muted lh-base m-0" style={{ fontSize: '1rem', color: 'var(--cinza600)' }}>
                                    {material.resumo}
                                </p>
                            </div>

                            <p className="mb-1 text-muted" style={{ fontSize: '1rem' }}>
                                <strong>páginas:</strong> {material.numero_paginas}
                            </p>
                            <p className="fw-bold text-secondary-300 m-0" style={{ fontSize: '1rem', color: 'var(--cinza600)' }}>
                                {material.editora}
                            </p>
                        </div>


                        <div className="d-flex justify-content-end ">
                            <ButtonWithIcon nome='Editar' bg_color='var(--cinza600)' Icon={IconEdit} 
                            onClick={(e) => {
                                e.stopPropagation();
                                onEditClick();
                            }} />
                        </div>

                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}