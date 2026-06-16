import { useState, useEffect } from 'react';
import http from '../api';

export function useCatalog(params = {}) {
    const [catalogBooks, setCatalogBooks] = useState([]);

    useEffect(() => {
        http.get('/livros/', {params})
            .then(response => {
                setCatalogBooks(response.data.results || []);
            })
            .catch(error => {
                console.error("Erro ao buscar catálogo:", error);
            });
    }, [JSON.stringify(params)]);

    return { catalogBooks };
}
