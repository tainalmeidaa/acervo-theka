import { useState, useEffect } from 'react';
import http from '../api';

export function useCarousel() {
    const [bookList, setBookList] = useState([]);
    const [activeBookId, setActiveBookId] = useState(null);

    useEffect(() => {
        http.get('/livros/novidades/')
            .then(response => {
                setBookList(response.data);
                setActiveBookId(response.data[0]?.id);
            })
            .catch(error => {
                console.error("Erro ao buscar as novidades da semana:", error);
            });
    }, []);

    const livroEmDestaque = bookList.find(book => book.id === activeBookId);

    return { bookList, activeBookId, setActiveBookId, livroEmDestaque };
}