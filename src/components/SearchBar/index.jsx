import { useForm } from 'react-hook-form';
import { ButtonWithIcon } from '../ButtonWithIcon';
import IconSearch from '../../assets/pagecollection/lupa.svg?react';
import IconFilter from '../../assets/pagecollection/filter.svg?react';
import '../SearchBar/SearchBar.styles.css'

export function SearchBar({ onBuscar }) {
    const { register, handleSubmit } = useForm();

    return (
        <section className='search_container'>
            <h2 className='search_title'>Veja nosso catálogo</h2>
            <form className='search_form' onSubmit={handleSubmit(onBuscar)}>

                <input
                    type="text"
                    placeholder="Fazer busca"
                    className='search_input'
                    {...register("pesquisa")}
                />

                <div className='search_filter_group'>

                    <div className='search_dropdown'>
                        <select className='search_dropdown_item' {...register("genero")}>
                            <option value="">Gênero</option>
                            <option value="romance">Romance</option>
                            <option value="terror">Terror</option>
                            <option value="conto">Conto</option>
                            <option value="ficcao">Ficção</option>
                        </select>
                        <span className='arrow_bottom_icon'>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                        </span>
                    </div>

                    <div className='search_dropdown'>
                        <select className='search_dropdown_item' {...register("editora")}>
                            <option value="">Editora</option>
                            <option value="companhia">Companhia das Letras</option>
                            <option value="intrinseca">Intrínseca</option>
                            <option value="record">Record</option>
                            <option value="darkside">DarkSide</option>
                        </select>
                        <span className='arrow_bottom_icon'>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                        </span>
                    </div>

                    <ButtonWithIcon type="submit" className='search_button' nome='Buscar' Icon={IconSearch} bg_color={'var(--rosa600)'}/>
                    <ButtonWithIcon type="submit" className='filter_button_mobile' Icon={IconFilter} bg_color={'var(--rosa600)'}/>
                </div>
            </form>
        </section>
    );
}