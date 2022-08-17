import React from 'react'
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm'
import { useNavigate, useLocation } from 'react-router-dom'
import { getHeroesByName } from '../helpers'
import { HeroCard } from '../components/HeroCard'



export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search )
  const heroes = getHeroesByName(q);

  // para mostrar los div de 'buscar hero' o 'no se encontro hero'
  const showSearch = (q.length === 0)
  const showError = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
      event.preventDefault();
      // if( searchText.trim().length <= 1 ) return;

      navigate(`?q=${ searchText }`)
    }



  return (
    <>
    <h1>Search</h1>
    <hr />    

    <div className='row'>

        <div className="col-5">
        <h4>Searching</h4>
        <hr />
            <form onSubmit={ onSearchSubmit }>
              <input
                type='text'
                placeholder='Search a hero'
                className='form-control'
                name='searchText'
                autoComplete='off'
                value={ searchText }
                onChange={ onInputChange }
              />
                <button className='btn btn-outline-primary mt-2'>
                  Search
                </button>
            </form>
        </div>

      <div className='col-7'>
        <h4>Results</h4>
          <hr />
            {/* {
              ( q === '' ) ?
              <div className='alert alert-primary'>Search a hero</div>
              : ( heroes.length === 0 ) && 
            <div className='alert alert-danger'>No Hero with <b>{ q }</b></div>
            } */}
               <div className='alert alert-primary animate__animated animate__fadeIn'
               style={{ display: showSearch ? '' : 'none' }}>
                Search a hero
                </div>

                <div className='alert alert-danger animate__animated animate__fadeIn'
                style={{ display: showError ? '' : 'none' }}>
                  No Hero with <b>{ q }</b>
                </div>

                {
                  heroes.map( hero => (
                    <HeroCard key={ hero.id } { ...hero } />
                  ))
                }
      </div>

    </div>
    </>
  )
}