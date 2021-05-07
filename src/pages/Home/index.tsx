import React from 'react';
import Button from 'core/components/Button';
import { Link } from 'react-router-dom';
import './styles.scss';

const Home = () => (
  <div className="row home-content">
    <div className="col-6 home-text">
      <h1 className="text-title">
        Desafio do Capítulo 3,
        <br />
        Bootcamp DevSuperior
      </h1>
      <div className="container-info">
        <p className="text-subtitle">
          Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.
        </p>
        <p className="text-subtitle">
          Favor observar as instruções passadas no capítulo sobre a elaboração
          desse projeto.
        </p>
        <p className="text-subtitle">
          Este design foi adaptado a partir de Ant Design System for Figma, de
          Mateusz Wierzbicki:
          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=someone@gmail.com">
            antforfigma@gmail.com
          </a>
        </p>
      </div>
      <Link to="/search">
        <Button text="Começar" />
      </Link>
    </div>
    <div className="col-6"></div>
  </div>
);

export default Home;
