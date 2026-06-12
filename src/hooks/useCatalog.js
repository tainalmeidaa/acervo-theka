import { useState, useEffect } from 'react';
import http from '../api';

export function useCatalog() {
    const [catalogBooks, setCatalogBooks] = useState([]);

    useEffect(() => {
        http.get('/livros/')
            .then(response => {
                setCatalogBooks(response.data.results || []);
            })
            .catch(error => {
                console.error("Erro ao buscar catálogo:", error);
            });
    }, []);

    return { catalogBooks };
}
