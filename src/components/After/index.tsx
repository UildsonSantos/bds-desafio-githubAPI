import { User } from 'types/user';
import AfterContentLoader from './AfterContentLoader';
import AfterImageLoader from './AfterImageLoader';

import './styles.css';

type Props = {
  user: User;
  isLoaded: boolean;
};

const After = ({ user, isLoaded }: Props) => {
  return (
    <>
      {isLoaded ? (
        <div className="after-loader-container">
          <AfterImageLoader />
          <AfterContentLoader />
        </div>
      ) : (
        <div className="after-container">
          <div className="after-image">
            <img src={user.avatar_url} alt="Profile" />
          </div>

          <div className="after-content">
            <h4>Informações</h4>
            <p>
              <span className="after-content-text">Perfil:</span>{' '}
              <a className="text-primary" href={user.url}>
                {user.url}
              </a>
            </p>
            <p>
              {' '}
              <span className="after-content-text">Seguidores:</span>{' '}
              {user.followers}{' '}
            </p>
            <p>
              <span className="after-content-text">Localidade:</span>{' '}
              {user.location}
            </p>
            <p>
              {' '}
              <span className="after-content-text">Nome: </span>
              {user.name}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default After;
