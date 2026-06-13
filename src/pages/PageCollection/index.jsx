import '../PageCollection/PageCollection.styles.css'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navbar } from "../../components/Navbar";
import { BookCard } from "../../components/BookCard"
import { ButtonWithIcon } from "../../components/ButtonWithIcon"
import IconEye from '../../assets/pagecollection/eye.svg?react';
import { Footer } from "../../components/Footer";
import { ModalMaterialForm } from "../../modals/ModalMaterialForm";
import { ModalMaterialView } from "../../modals/ModalMaterialView";
import { useCarousel } from '../../hooks/useCarousel';
import { useCatalog } from '../../hooks/useCatalog';

export function PageCollection() {

    const { bookList, activeBookId, setActiveBookId, livroEmDestaque } = useCarousel();
    const { catalogBooks } = useCatalog();


    // ---------- campo de busca: react-hook-form ----------
    const { register, handleSubmit } = useForm();
    const handleBuscar = (dadosDoFormulario) => {
        console.log("Dados capturados e prontos para a API:", dadosDoFormulario);
    };

    // ------- estado inicial dos modais -------
    const [modalVisivel, setModalVisivel] = useState(false);
    const [modalViewVisivel, setModalViewVisivel] = useState(false);
    const [livroSelecionado, setLivroSelecionado] = useState(null); // Guarda o livro clicado no catálogo

    return (
        <>
            <Navbar></Navbar>
            <div className='pagecollection__container'>

                {/* ---------- Novidades da semana + Carrossel ----------- */}
                <section className='news_container'>

                    {/* ----- Informações sobre as novidades: título, livro, autor/ano ----- */}
                    <div className='news_info'>
                        <h1 className='news_title'>Novidades da semana</h1>
                        <div className='news_description'>
                            <p className='description_title_book'>{livroEmDestaque?.titulo}</p>
                            <p className='description_author_book'>{livroEmDestaque?.autor}</p>
                        </div>
                    </div>

                    {/* ----- Carrossel com livros em destaque ----- */}
                    <div className='carousel_books'>
                        {bookList.map((book) => {
                            // se o id deste livro for igual ao id ativo, ele recebe a classe "ativo"
                            const isAtivo = book.id === activeBookId;

                            return (
                                <BookCard
                                    key={book.id}
                                    cover={book.capa}
                                    title={book.titulo}
                                    // se ativo ganha a classe "active_card", caso contrário fica normal
                                    className={`carousel_books_item ${isAtivo ? 'active_card' : ''}`}
                                    // ao clicar, o livro passa a ser o ativo
                                    onBookClick={() => setActiveBookId(book.id)}
                                />
                            );
                        })}
                    </div>
                </section>

                {/* ---------- Seção contendo campo de busca, catálogo e botões (ir - voltar) ---------- */}
                <section className='catalog_contaneiner'>

                    {/* ----- Campo para buscar os livros e aplicar filtros ----- */}
                    <section className='search_container'>
                        <h2 className='search_title'>Veja nosso catálogo</h2>
                        <form className='search_form' onSubmit={handleSubmit(handleBuscar)}>

                            {/* --- Campo para digitar nome do livro à esquerda ---*/}
                            <input
                                type="text"
                                placeholder="Fazer busca"
                                className='search_input'
                                {...register("pesquisa")}
                            />

                            {/* --- Grupo de filtros à direita --- */}
                            <div className='search_filter_group'>

                                {/* --- Dropdown gênero --- */}
                                <div className='search_dropdown'>
                                    <select
                                        className='search_dropdown_item'
                                        {...register("genero")}>
                                        <option value="">Gênero</option>
                                        <option value="romance">Romance</option>
                                        <option value="terror">Terror</option>
                                        <option value="conto">Conto</option>
                                        <option value="ficcao">Ficção</option>
                                    </select>
                                    <span className='arrow_bottom_icon'>
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                </div>

                                {/* --- Dropdown editora --- */}
                                <div className='search_dropdown'>
                                    <select
                                        className='search_dropdown_item'
                                        {...register("editora")}>
                                        <option value="">Editora</option>
                                        <option value="companhia">Companhia das Letras</option>
                                        <option value="intrinseca">Intrínseca</option>
                                        <option value="record">Record</option>
                                        <option value="darkside">DarkSide</option>
                                    </select>
                                    <span className='arrow_bottom_icon'>
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                </div>

                                {/* ---- Botão de busca ---- */}
                                <button type="submit" className='search_button'>
                                    <span>Buscar</span>
                                    <svg className='busca_botao_lupa' width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </section>

                    {/* ----- Catálogo: livros disponíveis ----- */}
                    <div>
                        <div className='catalog_books'>
                            {catalogBooks.map((book, index) => (
                                <div key={book.id} className="catalog_book_item">
                                    <BookCard
                                        cover={book.capa}
                                        title={book.titulo}
                                        className="catalog_card"
                                    />

                                    {/* -- Camada invisível. Surge ao passar o mouse nos livros --*/}
                                    <div className="catalog_book_camada">
                                        <div className="camada_info">
                                            <p style={{ fontWeight: '800' }}>{book.titulo}</p>
                                            <p>{book.autor}, {book.ano_publicacao}</p>
                                        </div>
                                        <div className="camada-botao">
                                            <ButtonWithIcon Icon={IconEye} bg_color={'var(--cinza600)'} onClick={() => { console.log("Livro clicado:", book); setLivroSelecionado(book); setModalViewVisivel(true) }} />
                                        </div>

                                    </div>

                                    {/* --- Botão "+" flutuante --- */}
                                    {index === 4 && (
                                        <button className="catalog_addbtn" onClick={() => { setLivroSelecionado(null); setModalVisivel(true); }}>
                                            <img src='src/assets/pagecollection/add-button.svg' />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* ----- Botões: fazer navegação entre as seções dos livros */}
                    <section className='pagination_container'>
                        <button type="button" className="pagination_arrow" aria-label="Página anterior">
                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.30517e-07 19C6.66256e-07 15.2422 1.11433 11.5687 3.20208 8.44417C5.28982 5.31964 8.25722 2.88436 11.729 1.4463C15.2008 0.00823174 19.0211 -0.368032 22.7067 0.365087C26.3924 1.09821 29.7778 2.90778 32.435 5.56498C35.0922 8.22217 36.9018 11.6077 37.6349 15.2933C38.368 18.9789 37.9918 22.7992 36.5537 26.271C35.1156 29.7428 32.6804 32.7102 29.5558 34.7979C26.4313 36.8857 22.7578 38 19 38C13.9625 37.9947 9.13288 35.9912 5.57085 32.4292C2.00881 28.8671 0.00532072 24.0375 8.30517e-07 19ZM22.9571 27.3417C23.093 27.206 23.2008 27.0448 23.2744 26.8674C23.3479 26.6899 23.3858 26.4998 23.3858 26.3077C23.3858 26.1156 23.3479 25.9254 23.2744 25.748C23.2008 25.5706 23.093 25.4094 22.9571 25.2737L16.6816 19L22.9571 12.7264C23.0929 12.5906 23.2006 12.4294 23.2741 12.2519C23.3476 12.0745 23.3854 11.8844 23.3854 11.6923C23.3854 11.5003 23.3476 11.3101 23.2741 11.1327C23.2006 10.9553 23.0929 10.7941 22.9571 10.6583C22.8213 10.5225 22.6601 10.4148 22.4827 10.3413C22.3053 10.2678 22.1151 10.23 21.9231 10.23C21.731 10.23 21.5409 10.2678 21.3635 10.3413C21.186 10.4148 21.0248 10.5225 20.889 10.6583L13.5813 17.966C13.4455 18.1017 13.3377 18.2629 13.2641 18.4403C13.1906 18.6177 13.1527 18.8079 13.1527 19C13.1527 19.1921 13.1906 19.3823 13.2641 19.5597C13.3377 19.7371 13.4455 19.8983 13.5813 20.034L20.889 27.3417C21.0248 27.4776 21.186 27.5854 21.3634 27.659C21.5408 27.7325 21.731 27.7704 21.9231 27.7704C22.1151 27.7704 22.3053 27.7325 22.4828 27.659C22.6602 27.5854 22.8214 27.4776 22.9571 27.3417Z" fill="#FF83A5" />
                            </svg>
                        </button>

                        <button type="button" className="pagination_item pagination_item_active">1</button>
                        <button type="button" className="pagination_item">2</button>
                        <button type="button" className="pagination_item">3</button>

                        <button type="button" className="pagination_arrow" aria-label="Próxima página">
                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path transform="rotate(180, 19, 19)" d="M8.30517e-07 19C6.66256e-07 15.2422 1.11433 11.5687 3.20208 8.44417C5.28982 5.31964 8.25722 2.88436 11.729 1.4463C15.2008 0.00823174 19.0211 -0.368032 22.7067 0.365087C26.3924 1.09821 29.7778 2.90778 32.435 5.56498C35.0922 8.22217 36.9018 11.6077 37.6349 15.2933C38.368 18.9789 37.9918 22.7992 36.5537 26.271C35.1156 29.7428 32.6804 32.7102 29.5558 34.7979C26.4313 36.8857 22.7578 38 19 38C13.9625 37.9947 9.13288 35.9912 5.57085 32.4292C2.00881 28.8671 0.00532072 24.0375 8.30517e-07 19ZM22.9571 27.3417C23.093 27.206 23.2008 27.0448 23.2744 26.8674C23.3479 26.6899 23.3858 26.4998 23.3858 26.3077C23.3858 26.1156 23.3479 25.9254 23.2744 25.748C23.2008 25.5706 23.093 25.4094 22.9571 25.2737L16.6816 19L22.9571 12.7264C23.0929 12.5906 23.2006 12.4294 23.2741 12.2519C23.3476 12.0745 23.3854 11.8844 23.3854 11.6923C23.3854 11.5003 23.3476 11.3101 23.2741 11.1327C23.2006 10.9553 23.0929 10.7941 22.9571 10.6583C22.8213 10.5225 22.6601 10.4148 22.4827 10.3413C22.3053 10.2678 22.1151 10.23 21.9231 10.23C21.731 10.23 21.5409 10.2678 21.3635 10.3413C21.186 10.4148 21.0248 10.5225 20.889 10.6583L13.5813 17.966C13.4455 18.1017 13.3377 18.2629 13.2641 18.4403C13.1906 18.6177 13.1527 18.8079 13.1527 19C13.1527 19.1921 13.1906 19.3823 13.2641 19.5597C13.3377 19.7371 13.4455 19.8983 13.5813 20.034L20.889 27.3417C21.0248 27.4776 21.186 27.5854 21.3634 27.659C21.5408 27.7325 21.731 27.7704 21.9231 27.7704C22.1151 27.7704 22.3053 27.7325 22.4828 27.659C22.6602 27.5854 22.8214 27.4776 22.9571 27.3417Z" fill="#FF83A5" />
                            </svg>
                        </button>
                    </section>
                </section>
            </div>
            <Footer></Footer>
        
            <ModalMaterialView
                isOpen={modalViewVisivel}
                onClose={() => setModalViewVisivel(false)}
                material={livroSelecionado}
                onEditClick={() => {
                    setModalViewVisivel(false);
                    setModalVisivel(true); 
                }}
            />

         
            <ModalMaterialForm
                isOpen={modalVisivel}
                onClose={() => setModalVisivel(false)}
                materialSelecionado={livroSelecionado}
            />

        </>
    );
}
