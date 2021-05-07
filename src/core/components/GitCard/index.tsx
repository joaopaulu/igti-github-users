import React, { useEffect, useState } from 'react';
import './style.scss';
import Button from '../Button';
import { UserGithub } from 'core/types/UserGithub';
import makeRequest from 'core/utils/request';
import ImageLoader from 'pages/Search/components/Loaders/ImageLoader';
import InfoLoader from 'pages/Search/components/Loaders/InfoLoader';
import DayJS from 'react-dayjs';

type Props = {
  gitUsername: string;
};

const GitCard = ({ gitUsername }: Props) => {
  const [user, setUser] = useState<UserGithub>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    makeRequest({ url: `/${gitUsername}` })
      .then(response => setUser(response.data))
      .finally(() => setIsLoading(false));
  }, [gitUsername]);

  return (
    <div className="row github-card-container">
      {isLoading ? (
        <ImageLoader />
      ) : (
        <div className="github-foto-container">
          <img src={user?.avatar_url} alt="Github Foto" />

          <a href={user?.html_url} target="_blank" rel="noreferrer">
            <Button text="Ver Perfil" />
          </a>
        </div>
      )}
      {isLoading ? (
        <InfoLoader />
      ) : (
        <div className="github-info-container">
          <div className="flex-info">
            <div className="items-info">
              Repositórios públicos: {user?.public_repos}
            </div>
            <div className="items-info">Seguidores: {user?.followers}</div>
            <div className="items-info">Seguindo: {user?.following}</div>
          </div>
          <div className="flex-info-details">
            <h6>Informações</h6>
            <div className="info-member">
              {user?.company && (
                <div className="info-member-details">
                  <span>Empresa:</span> {user?.company}
                </div>
              )}
              {user?.blog && (
                <div className="info-member-details">
                  <span>Website/Blog:</span> {user?.blog}
                </div>
              )}
              {user?.location && (
                <div className="info-member-details">
                  <span>Localidade:</span> {user?.location}
                </div>
              )}
              <div className="info-member-details">
                <span>Membro desde: </span>
                <DayJS format="DD/MM/YYYY">{user?.created_at}</DayJS>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitCard;
