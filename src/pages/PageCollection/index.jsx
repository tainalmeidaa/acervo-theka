import '../PageCollection/PageCollection.styles.css'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navbar } from "../../components/Navbar";
import { BookCard } from "../../components/BookCard"
import { Footer } from "../../components/Footer";

export function PageCollection() {

    // ------- carrossel: lista de livros -------
    const [bookList, setBookList] = useState([
        { id: 1, title: "A Cabeça do Santo", author: "Socorro Acioli - 2014", cover: "src/assets/pagecollection/livro1.svg" },
        { id: 2, title: "Oração Para Desaparecer", author: "Socorro Acioli - 2023", cover: "src/assets/pagecollection/livro2.svg" },
        { id: 3, title: "A Biblioteca da Meia-Noite", author: "Matt Haig - 2020", cover: "src/assets/pagecollection/livro3.svg" },
        { id: 4, title: "Nunca Vi A Chuva", author: "Stefano Volp - 2017", cover: "src/assets/pagecollection/livro4.svg" },
        { id: 5, title: "Canção Para Ninar Menino Grande", author: "Conceição Evaristo - 2018", cover: "src/assets/pagecollection/livro5.svg" },
    ]);

    // ---------- carrossel: guarda o id do livro clicado ----------
    const [activeBookId, setActiveBookId] = useState(1);

    // ---------- carrossel: descobre qual o livro ativo para mostrar o texto correto à esquerda ----------
    const livroEmDestaque = bookList.find(book => book.id === activeBookId);

    // ---------- campo de busca: react-hook-form ----------
    const { register, handleSubmit } = useForm();
    const handleBuscar = (dadosDoFormulario) => {
        console.log("Dados capturados e prontos para a API:", dadosDoFormulario);
    };

    // ---------- catálogo: lista de livros disponíveis ----------
    const catalogBooks = [
        { id: 1, title: "A Cabeça do Santo", cover: "src/assets/pagecollection/livro1.svg" },
        { id: 2, title: "Oração para desaparecer", cover: "src/assets/pagecollection/livro2.svg" },
        { id: 3, title: "A Biblioteca da Meia-Noite", cover: "src/assets/pagecollection/livro3.svg" },
        { id: 4, title: "Nunca vi a chuva", cover: "src/assets/pagecollection/livro4.svg" },
        { id: 5, title: "Canção para Ninar Menino Grande", cover: "src/assets/pagecollection/livro5.svg" },
        { id: 6, title: "Três", cover: "src/assets/pagecollection/livro6.svg" },
        { id: 7, title: "O Avesso da Pele", cover: "src/assets/pagecollection/livro7.svg" },
        { id: 8, title: "Garota, Mulher, Outras", cover: "src/assets/pagecollection/livro8.svg" },
        { id: 9, title: "Água Fresca para as Flores", cover: "src/assets/pagecollection/livro9.svg" },
        { id: 10, title: "Amor(es) Verdadeiro(s)", cover: "src/assets/pagecollection/livro10.svg" },
        { id: 11, title: "Daisy Jones & The Six", cover: "src/assets/pagecollection/livro11.svg" },
        { id: 12, title: "Torto Arado", cover: "src/assets/pagecollection/livro12.svg" },
        { id: 13, title: "O Conto da Aia", cover: "src/assets/pagecollection/livro13.svg" },
        { id: 14, title: "Os Sete Maridos de Evelyn Hugo", cover: "src/assets/pagecollection/livro14.svg" },
        { id: 15, title: "Em Busca de Mim", cover: "src/assets/pagecollection/livro15.svg" },
    ];


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
                            <p className='description_title_book'>{livroEmDestaque?.title}</p>
                            <p className='description_author_book'>{livroEmDestaque?.author}</p>
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
                                    cover={book.cover}
                                    title={book.title}
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
                    <section>
                        <div className='catalog_books'>
                            {catalogBooks.map((book, index) => (
                                <div key={book.id} className="catalog_book_item">
                                    <BookCard
                                        cover={book.cover}
                                        title={book.title}
                                        className="catalog_card"
                                    />

                                    {/* --- Botão "+" flutuante --- */}
                                    {index === 4 && (
                                        <button className="catalog_addbtn">
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.75 9.375C18.75 9.67337 18.6315 9.95952 18.4205 10.1705C18.2095 10.3815 17.9234 10.5 17.625 10.5H10.5V17.625C10.5 17.9234 10.3815 18.2095 10.1705 18.4205C9.95952 18.6315 9.67337 18.75 9.375 18.75C9.07663 18.75 8.79048 18.6315 8.5795 18.4205C8.36853 18.2095 8.25 17.9234 8.25 17.625V10.5H1.125C0.826631 10.5 0.540483 10.3815 0.329505 10.1705C0.118526 9.95952 0 9.67337 0 9.375C0 9.07663 0.118526 8.79048 0.329505 8.5795C0.540483 8.36853 0.826631 8.25 1.125 8.25H8.25V1.125C8.25 0.826631 8.36853 0.540483 8.5795 0.329505C8.79048 0.118526 9.07663 0 9.375 0C9.67337 0 9.95952 0.118526 10.1705 0.329505C10.3815 0.540483 10.5 0.826631 10.5 1.125V8.25H17.625C17.9234 8.25 18.2095 8.36853 18.4205 8.5795C18.6315 8.79048 18.75 9.07663 18.75 9.375Z" fill="white" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>


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
        </>
    );
}
