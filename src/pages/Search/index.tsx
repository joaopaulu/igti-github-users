import React, { useState } from 'react';
import Button from 'core/components/Button';
import GitCard from 'core/components/GitCard';
import './styles.scss';
import { UserGithub } from 'core/types/UserGithub';
import makeRequest from 'core/utils/request';

const Search = () => {
  const [search, setSearch] = useState('');
  const [inputError, setInputError] = useState('');
  const [, setUserInfo] = useState<UserGithub>();
  const [isSearch, setIsSearch] = useState(false);

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!search) {
      setInputError('Digite o usuário do Github');
      return;
    } else {
      makeRequest({ url: `/${search}` })
        .then(response => setUserInfo(response.data))
        .catch(() => {
          setInputError('Usuário não encontrado');
          setIsSearch(false);
        })
        .finally(() => {
          setIsSearch(true);
        });
    }
    setInputError('');
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLFormElement>,
  ) => {
    setSearch(event.target.value);
    setIsSearch(false);
  };

  return (
    <>
      <div className="search-container">
        <div className="form-search">
          <form onSubmit={handleSubmit}>
            <label htmlFor="search">Encontre um perfil no Github</label>

            <input
              value={search}
              onChange={handleChange}
              type="text"
              name="search"
              id="search"
              className={`form-control ${inputError && 'input-erro'}`}
              placeholder="Usuário Github"
            />

            {inputError && (
              <div className="input-erro-container">
                <span className="input-erro-text">{inputError}</span>
              </div>
            )}

            <div className="d-flex">
              <Button text="Encontrar" />
            </div>
          </form>
        </div>
      </div>
      {isSearch && <GitCard gitUsername={search} />}
    </>
  );
};

export default Search;
