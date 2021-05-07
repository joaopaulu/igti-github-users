import React from 'react';
import Button from 'core/components/Button';
import { Link } from 'react-router-dom';
import Dev from 'core/assets/images/developer.svg';
import './styles.scss';

const Home = () => (
  <div className="row home-content">
    <div className="col-6 home-text">
      <h1 className="text-title">Atividade prévia</h1>
      <div className="container-info">
        <p className="text-subtitle">
          Projeto React da disciplina REA – Desenvolvimento Reativo do MBA em
          Desenvolvimento Fullstack da IGTI, utilizando a API do Github para
          pesquisa de usuários.
        </p>
        <p className="text-subtitle">
          Projeto utilizando as tecnologias: Typescript + Bootstrap + Sass +
          React + GithubPages
        </p>
      </div>
      <Link to="/search">
        <Button text="Iniciar" />
      </Link>
    </div>
    <div className="col-6">
      <img src={Dev} alt="Developer" />
    </div>
  </div>
);

export default Home;
